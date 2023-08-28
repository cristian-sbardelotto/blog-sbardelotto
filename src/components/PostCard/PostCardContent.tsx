type PostCardContentProps = {
  content: string;
};

export function PostCardContent({ content }: PostCardContentProps) {
  return <p className='break-all text-gray-600 text-sm'>{content}</p>;
}
