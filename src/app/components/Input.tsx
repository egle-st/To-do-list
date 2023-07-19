import { FC } from 'react';

interface InputProps {
  className: string;
}

const Input: FC<InputProps> = ({ className }) => {
  return (
    <div>
      <label></label>
      <input className={className}></input>
    </div>
  );
};

export default Input;
