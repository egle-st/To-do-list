import { FC } from 'react';

interface ButtonProps {
  className: string;
  children: React.ReactNode;
  onClick(): void;
}

const Button: FC<ButtonProps> = ({ className, children, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
