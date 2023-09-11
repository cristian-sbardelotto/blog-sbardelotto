type PostCardRootProps = {
  children: React.ReactNode;
};

export function PostCardRoot({ children }: PostCardRootProps) {
  return (
    <section className='p-4 bg-white shadow-md rounded-md hover:scale-[1.02] transition duration-300'>
      {children}
    </section>
  );
}
