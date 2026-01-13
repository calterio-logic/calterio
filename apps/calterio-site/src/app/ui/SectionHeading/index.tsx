import React from 'react';
import parse from 'html-react-parser';
import Button from '../Button';
import Spacing from '../Spacing';
import Div from '../Div';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  btnLink?: string;
  btnText?: string;
  variant?: string;
  children?: React.ReactNode;
}

export default function SectionHeading({
  title,
  subtitle,
  btnLink,
  btnText,
  variant,
  children
}: SectionHeadingProps) {
  return (
    <Div className={variant ? `cs-section_heading ${variant}` : `cs-section_heading cs-style1`}>
      {subtitle && (
        <h3 className="cs-section_subtitle text-calterio-orange font-semibold text-sm uppercase tracking-wide mb-2">
          {parse(subtitle)}
        </h3>
      )}
      <h2 className="cs-section_title text-text-primary font-semibold text-4xl md:text-5xl leading-tight mb-4">
        {parse(title)}
      </h2>
      {children}
      {btnText && (
        <>
          <Spacing lg='45' md='20'/>
          <Button btnLink={btnLink} btnText={btnText} variant="primary"/>
        </>
      )}
    </Div>
  );
}

