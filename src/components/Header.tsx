'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Input } from '@/components/Input';
import { useAuth } from '@/hooks/useAuth';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data, isUserLoggedIn, signIn, signOut } = useAuth();

  return (
    <header className='pt-[30px] px-4 pb-12 bg-gradient-to-r from-header-dark-blue to-header-light-blue'>
      <nav className='flex justify-between items-center mb-14 relative'>
        <h1 className='text-white font-bold text-xl'>
          <Link href='/'>Blog Sbardelotto</Link>
        </h1>

        {isUserLoggedIn ? (
          <Image
            src={String(data?.user?.image)}
            alt='User Image'
            width={40}
            height={40}
            className='rounded-full border border-gray-200'
            onClick={() => setIsMenuOpen(previous => !previous)}
          />
        ) : (
          <button
            onClick={() => signIn()}
            className='text-white'
          >
            Login
          </button>
        )}

        {isMenuOpen && (
          <div className='z-50 absolute top-14 right-0 p-2 bg-white rounded-lg shadow-md'>
            <button
              className='text-primary text-sm font-semibold'
              onClick={() => signOut()}
            >
              Logout
            </button>
          </div>
        )}
      </nav>

      <Input />
    </header>
  );
}
