'use client';

import Link from 'next/link';

import { Search } from 'lucide-react';

export function Header() {
  return (
    <header className='pt-[30px] px-4 pb-12 bg-gradient-to-r from-header-dark-blue to-header-light-blue'>
      <nav className='flex justify-between mb-14'>
        <h1 className='text-white font-bold text-xl'>
          <Link href='/'>Blog Sbardelotto</Link>
        </h1>

        <button className='text-white'>Login</button>
      </nav>

      <div className='relative'>
        <Search
          className='absolute left-3 top-[33%]'
          size={16}
          color='#fff'
        />

        <input
          className='pl-10 pr-5 py-3 bg-dark-transparent w-full text-gray-200 rounded-md outline-none'
          placeholder='Pesquisar no Blog'
        />
      </div>
    </header>
  );
}
