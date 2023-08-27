import Link from 'next/link';

import { ExternalLink } from 'lucide-react';

type PostHeaderProps = {
  createdAt: React.ReactNode;
  postId: string;
};

export function PostHeader({ createdAt, postId }: PostHeaderProps) {
  return (
    <div className='flex justify-between mb-7'>
      <span className='text-gray-600 text-sm'>{createdAt}</span>

      <Link
        href={`/post/${postId}`}
        target='_blank'
        className='h-fit w-fit'
      >
        <ExternalLink size={18} />
      </Link>
    </div>
  );
}
