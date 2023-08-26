import Link from 'next/link';

import { ExternalLink } from 'lucide-react';

export function PostHeader() {
  return (
    <div className='flex justify-between mb-7'>
      <span className='text-gray-600 text-sm'>02 de jul, 2021</span>

      <Link href='/'>
        <ExternalLink size={18} />
      </Link>
    </div>
  );
}
