'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/Button';
import { useAuth } from '@/hooks/useAuth';
import { useModal } from '@/hooks/useModal';
import { X } from 'lucide-react';

export function Header() {
  const { isModalOpen, toggleModal } = useModal(false);
  const { data, isUserLoggedIn, signIn, signOut } = useAuth();

  return (
    <header className='pt-[30px] px-4 pb-6 bg-gradient-to-r from-header-dark-blue to-header-light-blue'>
      <nav className='flex justify-between items-center relative'>
        <h1 className='text-white font-bold text-xl'>
          <Link href='/'>Blog Sbardelotto</Link>
        </h1>

        {isUserLoggedIn ? (
          isModalOpen ? (
            <X
              size={40}
              onClick={toggleModal}
              className='cursor-pointer'
            />
          ) : (
            <Image
              src={String(data?.user?.image)}
              alt='User Image'
              width={40}
              height={40}
              className='rounded-full border border-gray-200 cursor-pointer'
              onClick={toggleModal}
            />
          )
        ) : (
          <Button
            onClick={() => signIn()}
            className='text-white'
          >
            Login
          </Button>
        )}

        {isModalOpen && (
          <div className='z-50 flex flex-col absolute top-14 right-0 p-2 bg-white rounded-lg shadow-md animate-appear'>
            <Link
              href='/my-posts'
              className='border-b'
            >
              <Button className='text-sm font-semibold hover:bg-gray-100 transition-colors'>
                Meus Posts
              </Button>
            </Link>

            <Button
              className='text-red-500 text-sm font-semibold hover:bg-gray-100 transition-colors'
              onClick={() => signOut()}
            >
              Sair
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
