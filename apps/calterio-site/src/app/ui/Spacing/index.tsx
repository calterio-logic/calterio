import React from 'react';
import Div from '../Div';

interface SpacingProps {
  lg?: string | number;
  md?: string | number;
  sm?: string | number;
}

export default function Spacing({ lg, md, sm }: SpacingProps) {
  const classes: string[] = [];
  
  if (lg) classes.push(`cs-height_${lg}`);
  if (md) classes.push(`cs-height_lg_${md}`);
  if (sm) classes.push(`cs-height_md_${sm}`);
  
  return <Div className={classes.join(' ')}></Div>;
}

