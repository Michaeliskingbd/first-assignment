import React from "react";

const Button = ({ label, className }) => {
  return (
    <div className={` px-4 py-4 rounded-md text-center ${className}`}>
      {label}
    </div>
  );
};

export default Button;
