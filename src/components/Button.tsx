import { twMerge } from 'tailwind-merge';

import { Loader2 } from 'lucide-react';

type ButtonProps = React.ComponentProps<'button'> & {
  variant?: 'primary' | 'outline' | 'danger';
  isLoading?: boolean;
};

const variantClasses = {
  primary: 'border-none',
  outline: 'bg-transparent border border-black',
  danger: 'border border-red-500 text-red-500',
};

export function Button({
  variant = 'primary',
  isLoading = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  const buttonClassName = twMerge(
    `${variantClasses[variant]} px-4 py-2 rounded-md ${
      isLoading && 'opacity-75'
    } ${className}`
  );

  return (
    <button
      className={buttonClassName}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? <Loader2 className='h-4 w-4 animate-spin' /> : children}
    </button>
  );
}
