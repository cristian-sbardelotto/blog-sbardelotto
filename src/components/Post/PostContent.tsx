type PostContentProps = {
  content: string;
};

export function PostContent({ content }: PostContentProps) {
  return <p className='break-all text-gray-600 text-sm'>{content}</p>;
}
