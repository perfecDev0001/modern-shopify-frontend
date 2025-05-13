import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    isLoading = false, 
    fullWidth = false,
    children, 
    ...props 
  }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 disabled:opacity-50 disabled:pointer-events-none';
    
    const variants = {
      primary: 'bg-brand-600 text-white hover:bg-brand-700',
      secondary: 'bg-brand-100 text-brand-900 hover:bg-brand-200',
      outline: 'border border-gray-300 bg-transparent hover:bg-gray-50',
      ghost: 'bg-transparent hover:bg-gray-100',
      danger: 'bg-red-600 text-white hover:bg-red-700',
    };
    
    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-4',
      lg: 'h-12 px-6 text-lg',
    };
    
    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth ? 'w-full' : '',
          className
        )}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;