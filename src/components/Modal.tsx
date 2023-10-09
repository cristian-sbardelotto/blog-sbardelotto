type ModalProps = {
  children: React.ReactNode;
};

export function Modal({ children }: ModalProps) {
  return (
    <div className='absolute inset-0 z-50 px-4 w-full h-screen flex items-center justify-center bg-shadow-transparent'>
      {children}
    </div>
  );
}
