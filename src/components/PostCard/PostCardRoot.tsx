type PostCardRootProps = {
  children: React.ReactNode;
};

export function PostCardRoot({ children }: PostCardRootProps) {
  return (
    <section className='p-4 bg-white shadow-md rounded-md'>{children}</section>
  );
}
