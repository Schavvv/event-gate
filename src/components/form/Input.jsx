// src/components/form/Input.jsx
import React from 'react';

const Input = ({ label, type, placeholder, name }) => {
  return (
    <fieldset className="fieldset w-full">
      <legend className="fieldset-legend text-sm font-medium">{label}</legend>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="input w-full border border-gray-300 rounded-md p-2"
      />
    </fieldset>
  );
};

export default Input;