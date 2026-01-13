import React from 'react';

interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default function Div({ children, ...props }: DivProps) {
  return (
    <div {...props}>{children}</div>
  );
}

