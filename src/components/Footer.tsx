import Link from 'next/link';

export function Footer() {
  return (
    <footer className='bg-zinc-200 px-10 py-8 mt-6'>
      Desenvolvido com 🧡 por{' '}
      <Link
        href='https://linkedin.com/in/cristian-k-sbardelotto'
        target='_blank'
        className='underline hover:text-zinc-600 transition-colors'
      >
        Cristian Sbardelotto
      </Link>
    </footer>
  );
}
