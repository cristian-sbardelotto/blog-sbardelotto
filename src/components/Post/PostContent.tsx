type PostContentProps = {
  content: string;
};

export function PostContent({ content }: PostContentProps) {
  return <p className='text-gray-600 text-sm'>{content}</p>;
}
