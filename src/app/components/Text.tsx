import { FC } from 'react';

interface TextProps {
  className: string;
  text: string;
}

const Button: FC<TextProps> = ({ className, text }) => {
  return <p className={className}>{text}</p>;
};

export default Button;
