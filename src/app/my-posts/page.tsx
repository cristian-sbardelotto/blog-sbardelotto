'use client';

import Link from 'next/link';

import { Button } from '@/components/Button';
import { PostCard } from '@/components/PostCard';
import { useFetch } from '@/hooks/useFetch';
import { Post } from '@prisma/client';
import { Modal } from '@/components/Modal';
import { useState } from 'react';

export default function MyPosts() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data } = useFetch<Post[]>('/api/my-posts/');

  return (
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

            {isModalOpen && (
              <Modal>
                <div className='p-8 pb-5 rounded-lg shadow-xl bg-gray-100 w-full animate-appear'>
                  <h3>os homi nao tem jeito</h3>

                  <button onClick={() => setIsModalOpen(false)}>
                    Fechar modal
                  </button>
                </div>
              </Modal>
            )}
          </PostCard.Root>
        ))}
    </main>
  );
}
