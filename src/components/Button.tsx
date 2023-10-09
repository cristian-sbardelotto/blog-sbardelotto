import { twMerge } from 'tailwind-merge';

type ButtonProps = React.ComponentProps<'button'> & {
  variant?: 'primary' | 'outline' | 'danger';
};

const variantClasses = {
  primary: 'border-none',
  outline: 'bg-transparent border border-black',
  danger: 'border border-red-500 text-red-500',
};

export function Button({
  variant = 'primary',
  className,
  children,
  ...rest
}: ButtonProps) {
  const buttonClassName = twMerge(
    `${variantClasses[variant]} px-4 py-2 rounded-md ${className}`
  );

  return (
    <button
      className={buttonClassName}
      {...rest}
    >
      {children}
    </button>
  );
}
