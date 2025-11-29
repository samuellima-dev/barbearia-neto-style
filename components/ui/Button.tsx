import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-bold tracking-wider uppercase transition-all duration-300 font-sans disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gold-500 hover:bg-gold-600 text-graphite-900 shadow-md hover:shadow-lg hover:-translate-y-0.5",
    outline: "border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-graphite-900",
    text: "text-graphite-900 hover:text-gold-500 underline-offset-4 hover:underline",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;