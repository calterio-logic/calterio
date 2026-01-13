const fs = require('fs');
const path = require('path');

const useCasesDirectory = path.join(process.cwd(), 'seo', 'usecases');
const errors = [];

// Validate all YAML files
function validateUseCases() {
  try {
    const fileNames = fs.readdirSync(useCasesDirectory);
    const yamlFiles = fileNames.filter((name) => name.endsWith('.yaml'));

    yamlFiles.forEach((fileName) => {
      const filePath = path.join(useCasesDirectory, fileName);
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');

      // Check for required fields
      const requiredFields = ['slug', 'title', 'h1', 'meta_description', 'industry', 'problem', 'solution', 'cta'];
      const foundFields = new Set();

      lines.forEach((line) => {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#') && trimmed.includes(':')) {
          const key = trimmed.split(':')[0].trim();
          foundFields.add(key);
        }
      });

      // Check for missing required fields
      requiredFields.forEach((field) => {
        if (!foundFields.has(field)) {
          errors.push(`${fileName}: Missing required field '${field}'`);
        }
      });

      // Check for meta_description
      const metaDescMatch = content.match(/^meta_description:\s*(.+)$/m);
      if (!metaDescMatch || !metaDescMatch[1].trim()) {
        errors.push(`${fileName}: Missing or empty meta_description`);
      }

      // Check for H1
      const h1Match = content.match(/^h1:\s*(.+)$/m);
      if (!h1Match || !h1Match[1].trim()) {
        errors.push(`${fileName}: Missing or empty h1`);
      }

      // Check for exactly one H1 (in YAML, this is enforced by structure)
      const h1Count = (content.match(/^h1:/gm) || []).length;
      if (h1Count !== 1) {
        errors.push(`${fileName}: Expected exactly 1 H1, found ${h1Count}`);
      }
    });

    if (errors.length > 0) {
      console.error('SEO Validation Errors:');
      errors.forEach((error) => console.error(`  ❌ ${error}`));
      process.exit(1);
    }

    console.log(`✅ SEO validation passed for ${yamlFiles.length} use case files`);
  } catch (error) {
    console.error('Error during SEO validation:', error);
    process.exit(1);
  }
}

validateUseCases();

