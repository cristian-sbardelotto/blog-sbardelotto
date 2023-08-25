'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Input } from '@/components/Input';
import { signIn, useSession } from 'next-auth/react';

export function Header() {
  const { data, status } = useSession();

  return (
    <header className='pt-[30px] px-4 pb-12 bg-gradient-to-r from-header-dark-blue to-header-light-blue'>
      <nav className='flex justify-between mb-14'>
        <h1 className='text-white font-bold text-xl'>
          <Link href='/'>Blog Sbardelotto</Link>
        </h1>

        {status === 'authenticated' ? (
          <Image
            src={String(data?.user?.image)}
            alt='User Image'
            width={50}
            height={50}
          />
        ) : (
          <button
            onClick={() => signIn()}
            className='text-white'
          >
            Login
          </button>
        )}
      </nav>

      <Input />
    </header>
  );
}
