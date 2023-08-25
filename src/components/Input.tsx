import { Search } from 'lucide-react';

export function Input() {
  return (
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
  );
}
