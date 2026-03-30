import { cn } from '../../lib/utils';

const Button = ({ 
  className = '', 
  variant = 'default', 
  size = 'default', 
  children, 
  disabled,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2';

  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-gray-200 bg-white hover:bg-gray-50 text-gray-900',
    ghost: 'hover:bg-gray-100',
    destructive: 'bg-red-500 text-white hover:bg-red-600'
  };

  const sizes = {
    default: 'h-10 px-4',
    sm: 'h-9 px-3 rounded-lg',
    lg: 'h-12 px-8'
  };

  const buttonClasses = cn(
    baseClasses,
    variants[variant] || variants.default,
    sizes[size] || sizes.default,
    className
  );

  return (
    <button 
      className={buttonClasses} 
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
