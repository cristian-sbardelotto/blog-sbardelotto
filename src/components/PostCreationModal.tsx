'use client';

import { useState } from 'react';

import { Button } from '@/components/Button';
import { useAuth } from '@/hooks/useAuth';
import { X } from 'lucide-react';

type PostCreationModalProps = {
  onCancel: () => void;
};

export function PostCreationModal({ onCancel }: PostCreationModalProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { data } = useAuth();

  async function createPost() {
    const postData = {
      title,
      content,
      userId: (data?.user as { id: string }).id,
    };

    await fetch('/api/create/', {
      method: 'POST',
      body: JSON.stringify(postData),
    });
  }

  return (
    <div className='absolute inset-0 z-50 px-4 w-full h-screen flex items-center justify-center bg-shadow-transparent'>
      <div className='p-8 pb-5 rounded-lg shadow-xl bg-gray-100 w-full animate-appear'>
        <div className='mb-3 pb-3 flex justify-between items-center border-b border-gray-600'>
          <h2 className='text-xl font-medium'>Novo post</h2>

          <Button onClick={onCancel}>
            <X
              className='h-fit'
              size={22}
            />
          </Button>
        </div>

        <div className='flex flex-col gap-1'>
          <label
            htmlFor='title'
            className='text-sm'
          >
            Título da publicação
          </label>

          <input
            id='title'
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder='Digite seu título'
            className='mb-6 p-2 border border-gray-600 bg-transparent outline-none rounded-md font-sans focus:border-black transition-colors'
          />
        </div>

        <textarea
          placeholder='Conteúdo da publicação...'
          value={content}
          onChange={e => setContent(e.target.value)}
          className='h-[25vh] w-full p-2 mb-6 outline-none resize-none font-sans bg-transparent border border-gray-600 rounded-lg focus:border-black transition-colors'
        />

        <div className='flex gap-3 justify-end'>
          <Button
            className='hover:text-red-600 transition-colors'
            onClick={onCancel}
          >
            Cancelar
          </Button>

          <Button
            className='bg-blue-700 text-white rounded-full hover:bg-blue-600 transition-colors'
            onClick={createPost}
          >
            Publicar
          </Button>
        </div>
      </div>
    </div>
  );
}
