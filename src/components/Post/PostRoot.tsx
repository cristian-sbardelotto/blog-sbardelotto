type PostRootProps = {
  children: React.ReactNode;
};

export function PostRoot({ children }: PostRootProps) {
  return (
    <section className='p-4 bg-white shadow-md rounded-md'>{children}</section>
  );
}
