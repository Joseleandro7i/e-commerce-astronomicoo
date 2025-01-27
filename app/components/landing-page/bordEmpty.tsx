import React from 'react';

// Define props type
interface BordEmptyProps {
    sizeInWidth: string;
    sizeInHeigth: string;
    orientacion: string;
}

// Functional component with properly typed props
const BordEmpty: React.FC<BordEmptyProps> = ({ sizeInWidth, orientacion, sizeInHeigth }) => (
    <div className={`
    ${sizeInWidth} 
    ${sizeInHeigth}
    ${orientacion === 'vertical' ? 'flex-col' : 'flex-row'}
     bg-slate-500`}
    />
);

export default BordEmpty;