import Link from 'next/link';

import { ExternalLink } from 'lucide-react';

type PostCardHeaderProps = {
  createdAt: React.ReactNode;
  postId: string;
  createdBy: string;
};

export function PostCardHeader({
  createdAt,
  createdBy,
  postId,
}: PostCardHeaderProps) {
  return (
    <div className='flex justify-between mb-7'>
      <div className='flex flex-col justify-start'>
        <p className='text-gray-600 text-sm'>
          Criado por <span className='break-all text-black'>{createdBy}</span>
        </p>

        <p className='text-gray-600 text-sm'>{createdAt}</p>
      </div>

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
