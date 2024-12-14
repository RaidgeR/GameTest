import React from 'react';

export const BitcoinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m3.94.694-.347 1.969M7.116 7.291l-1.254-.223-.224 1.27m0 0C4.87 13.238 6.81 17.534 11.421 18.396" />
  </svg>
);

export const EthereumIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M12 2v4m0 12v4m-8-8h4m8 0h4M6.343 6.343l2.828 2.828m5.657 5.657 2.828 2.828m0-11.314-2.828 2.828m-5.657 5.657-2.828 2.828" />
  </svg>
);