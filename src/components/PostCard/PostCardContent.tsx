type PostCardContentProps = {
  content: string;
};

export function PostCardContent({ content }: PostCardContentProps) {
  return (
    <p className='overflow-hidden text-ellipsis whitespace-nowrap text-gray-600 text-sm'>
      {content}
    </p>
  );
}
