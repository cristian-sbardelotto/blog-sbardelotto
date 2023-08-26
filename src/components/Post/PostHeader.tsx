import Link from 'next/link';

import { ExternalLink } from 'lucide-react';

type PostHeaderProps = {
  createdAt: React.ReactNode;
};

export function PostHeader({ createdAt }: PostHeaderProps) {
  return (
    <div className='flex justify-between mb-7'>
      <span className='text-gray-600 text-sm'>{createdAt}</span>

      <Link href='/'>
        <ExternalLink size={18} />
      </Link>
    </div>
  );
}
