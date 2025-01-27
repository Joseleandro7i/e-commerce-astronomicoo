import React from 'react';
import { Separator as RadixSeparator } from '@radix-ui/react-separator';

// Define props type
interface SeparatorProps {
  orientation: 'horizontal' | 'vertical';
  widthOfSeparator?: string; 
  margin?: string;
}

const Separator: React.FC<SeparatorProps> = ({ orientation, widthOfSeparator, margin }) => {
  const orientationClass =
    orientation === 'horizontal'
      ? `${widthOfSeparator} h-[0.5px] w-auto ${margin}` // Corrected syntax
      : 'h-auto w-[0.5px] mt-4 mb-4'; // Ensure this part is consistent

  // Combine classes more efficiently
  const separatorClasses = `${orientationClass} bg-white ${margin}`;

  return (
    <RadixSeparator
      orientation={orientation} // Explicitly pass the orientation prop
      className={separatorClasses.trim()} // Trim to handle extra spaces
    />
  );
};

export default Separator;
