import { twMerge } from 'tailwind-merge';

type ButtonProps = React.ComponentProps<'button'> & {
  variant?: 'primary' | 'outline';
};

const variantClasses = {
  primary: 'border-none',
  outline: 'bg-transparent border border-black',
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