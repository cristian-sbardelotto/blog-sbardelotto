import { ChangeEventHandler } from 'react';

import { Search } from 'lucide-react';

type SearchInputProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
};

export function SearchInput({ onChange, value }: SearchInputProps) {
  return (
    <div className='relative'>
      <Search
        className='absolute left-3 top-[33%]'
        size={16}
      />

      <input
        className='pl-10 pr-5 py-3 bg-zinc-200 w-full rounded-md outline-none'
        placeholder='Pesquisar no Blog'
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
