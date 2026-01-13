import React, { useState } from 'react';

interface DropDownProps {
  children: React.ReactNode;
}

export default function DropDown({ children }: DropDownProps) {
  const [mobileToggle, setMobileToggle] = useState(false);
  
  const handleMobileToggle = () => {
    setMobileToggle(!mobileToggle);
  };
  
  return (
    <>
      <span 
        className={mobileToggle ? "cs-munu_dropdown_toggle active" : "cs-munu_dropdown_toggle"} 
        onClick={handleMobileToggle}
      ></span>
      {children}
    </>
  );
}

