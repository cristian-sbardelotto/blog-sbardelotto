'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/Button';
import { useAuth } from '@/hooks/useAuth';

import { Post } from '@prisma/client';
import { X } from 'lucide-react';

type PostCreationModalProps = {
  onCancel: () => void;
};

const postSchema = z.object({
  title: z
    .string()
    .nonempty('O título é obrigatório')
    .max(100, 'O título pode ter no máximo 100 caracteres'),
  content: z
    .string()
    .nonempty('O conteúdo é obrigatório')
    .max(2000, 'O conteúdo pode ter no máximo 2.000 caracteres'),
});

type FormProps = z.infer<typeof postSchema>;

export function PostCreationModal({ onCancel }: PostCreationModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: zodResolver(postSchema),
  });

  const { data } = useAuth();

  async function createPost({ content, title }: Post) {
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
      <form
        onSubmit={handleSubmit(createPost as SubmitHandler<FormProps>)}
        className='p-8 pb-5 rounded-lg shadow-xl bg-gray-100 w-full animate-appear'
      >
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
            placeholder='Digite seu título'
            className='mb-6 p-2 border border-gray-600 bg-transparent outline-none rounded-md font-sans focus:border-black transition-colors'
            {...register('title')}
          />
          <span>{errors.title && errors.title.message}</span>
        </div>

        <textarea
          placeholder='Conteúdo da publicação...'
          className='h-[25vh] w-full p-2 mb-6 outline-none resize-none font-sans bg-transparent border border-gray-600 rounded-lg focus:border-black transition-colors'
          {...register('content')}
        />
        <span>{errors.content && errors.content.message}</span>

        <div className='flex gap-3 justify-end'>
          <Button
            className='hover:text-red-600 transition-colors'
            onClick={onCancel}
          >
            Cancelar
          </Button>

          <Button
            className='bg-blue-700 text-white rounded-full hover:bg-blue-600 transition-colors'
            type='submit'
          >
            Publicar
          </Button>
        </div>
      </form>
    </div>
  );
}
