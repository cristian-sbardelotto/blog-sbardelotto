'use client';

import { useState } from 'react';
import Link from 'next/link';

import { Button } from '@/components/Button';
import { PostCard } from '@/components/PostCard';
import { useFetch } from '@/hooks/useFetch';
import { Post } from '@prisma/client';
import { Modal } from '@/components/Modal';
import { X } from 'lucide-react';

export default function MyPosts() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data } = useFetch<Post[]>('/api/my-posts/');

  return (
    <>
      <main className='px-5 pt-4 space-y-6'>
        {data &&
          data?.map(post => (
            <PostCard.Root key={post.id}>
              <PostCard.Title
                postId={post.id}
                title={post.title}
              />

              <Link href={`/posts/${post.id}`}>
                <Button
                  variant='outline'
                  className='w-full hover:bg-black hover:text-gray-200 transition-colors'
                >
                  Mais detalhes
                </Button>
              </Link>

              <Button
                variant='danger'
                className='w-full hover:bg-red-500 hover:text-gray-200 transition-colors mt-3'
                onClick={() => setIsModalOpen(true)}
              >
                Excluir post
              </Button>
            </PostCard.Root>
          ))}
      </main>
      {isModalOpen && (
        <Modal>
          <div className='p-8 pb-5 rounded-lg shadow-xl bg-gray-100 w-full animate-appear'>
            <div className='mb-3 pb-3 flex justify-between items-center border-b'>
              <h2 className='text-xl font-medium'>Excluir post</h2>

              <button onClick={() => setIsModalOpen(false)}>
                <X />
              </button>
            </div>

            <p className='mb-6'>
              Você tem certeza que deseja excluir a publicação?
            </p>

            <div className='flex gap-3 justify-end'>
              <Button
                variant='danger'
                className='hover:bg-red-500 hover:text-gray-200 transition-colors'
                onClick={() => {}}
              >
                Excluir
              </Button>

              <Button
                onClick={() => setIsModalOpen(false)}
                className='hover:text-gray-400 transition-colors'
              >
                Cancelar
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
