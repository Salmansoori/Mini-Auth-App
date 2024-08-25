import React from "react";

import "./inputField.css";

const InputField = ({
  type,
  label,
  className,
  placeholder,
  value,
  onChange,
  fieldLabel,
}) => {
  return (
    <div className="inputFieldClassName">
      <span className={fieldLabel}>{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
      />
    </div>
  );
};

export default InputField;
