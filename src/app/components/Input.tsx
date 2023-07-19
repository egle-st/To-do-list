import React, { FC, ChangeEvent } from 'react';

interface InputProps {
  className: string;
  type: string;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
}

const Input: FC<InputProps> = ({
  className,
  type,
  inputValue,
  setInputValue,
  placeholder,
}) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <label></label>
      <input
        className={className}
        type={type}
        onChange={handleInputChange}
        value={inputValue}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default Input;
