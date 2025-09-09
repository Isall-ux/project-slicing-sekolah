import React from 'react';

const Button = ({ label, link }) => {
  return (
    <button
      className="px-5 py-2 bg-white flex items-center justify-between"
      onClick={() => window.location.href = link}
    >
      {label}
    </button>
  );
};

export default Button;