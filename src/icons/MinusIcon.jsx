import React from 'react';

const MinusIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`w-6 h-6 ${className ? className : ''}`}
    >
      <path
        fillRule="evenodd"
        d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default MinusIcon;
