'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/Button';
import { useAuth } from '@/hooks/useAuth';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data, isUserLoggedIn, signIn, signOut } = useAuth();

  return (
    <header className='pt-[30px] px-4 pb-6 bg-gradient-to-r from-header-dark-blue to-header-light-blue'>
      <nav className='flex justify-between items-center relative'>
        <h1 className='text-white font-bold text-xl'>
          <Link href='/'>Blog Sbardelotto</Link>
        </h1>

        {isUserLoggedIn ? (
          <Image
            src={String(data?.user?.image)}
            alt='User Image'
            width={40}
            height={40}
            className='rounded-full border border-gray-200 cursor-pointer'
            onClick={() => setIsMenuOpen(previous => !previous)}
          />
        ) : (
          <Button
            onClick={() => signIn()}
            className='text-white'
          >
            Login
          </Button>
        )}

        {isMenuOpen && (
          <div className='z-50 flex flex-col absolute top-14 right-0 p-2 bg-white rounded-lg shadow-md animate-appear'>
            <Link
              href='/my-posts'
              className='border-b'
            >
              <Button className='text-primary text-sm font-semibold hover:bg-gray-100 transition-colors'>
                My Posts
              </Button>
            </Link>

            <Button
              className='text-primary text-sm font-semibold hover:bg-gray-100 transition-colors'
              onClick={() => signOut()}
            >
              Logout
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
