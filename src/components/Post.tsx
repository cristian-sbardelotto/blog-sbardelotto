import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function Post() {
  return (
    <section className='p-4 bg-white shadow-md rounded-md'>
      <div className='flex justify-between mb-7'>
        <span className='text-gray-600 text-sm'>02 de jul, 2021</span>

        <Link href='/'>
          <ExternalLink size={18} />
        </Link>
      </div>

      <h3 className='text-lg text-slate-900 mb-2'>
        Agora é oficial: o Windows 11 está vindo
      </h3>

      <p className='text-gray-600 text-sm'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel
        diam fringilla, eu ullamcorper ex iaculis.
      </p>
    </section>
  );
}
