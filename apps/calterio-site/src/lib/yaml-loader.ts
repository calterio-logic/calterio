import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { UseCaseYAML } from '@/types/seo';

// For Next.js, use process.cwd() which works at build time
const useCasesDirectory = path.join(process.cwd(), 'seo', 'usecases');

export function getAllUseCaseSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(useCasesDirectory);
    return fileNames
      .filter((name) => name.endsWith('.yaml'))
      .map((name) => name.replace(/\.yaml$/, ''));
  } catch (error) {
    console.error('Error reading use cases directory:', error);
    return [];
  }
}

export async function getUseCaseBySlug(slug: string): Promise<UseCaseYAML | null> {
  try {
    const fullPath = path.join(useCasesDirectory, `${slug}.yaml`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const data = yaml.load(fileContents) as UseCaseYAML;
    
    // Validate required fields
    if (!data.slug || !data.title || !data.h1 || !data.meta_description) {
      throw new Error(`Use case ${slug} is missing required fields`);
    }
    
    return data;
  } catch (error) {
    console.error(`Error loading use case ${slug}:`, error);
    return null;
  }
}

export async function getAllUseCases(): Promise<UseCaseYAML[]> {
  const slugs = getAllUseCaseSlugs();
  const useCases = await Promise.all(
    slugs.map((slug) => getUseCaseBySlug(slug))
  );
  return useCases.filter((uc): uc is UseCaseYAML => uc !== null);
}
