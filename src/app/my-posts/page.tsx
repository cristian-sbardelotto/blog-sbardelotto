'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/Button';
import { PostCard } from '@/components/PostCard';
import { useFetch } from '@/hooks/useFetch';
import { Post } from '@prisma/client';
import { toast } from 'react-toastify';

export default function MyPosts() {
  const [isLoading, setIsLoading] = useState(false);

  const { data } = useFetch<Post[]>('/api/my-posts/');
  const router = useRouter();

  async function deletePost(id: string) {
    setIsLoading(true);

    const response = await fetch(`/api/my-posts/${id}`, { method: 'DELETE' });

    if (response.ok) {
      setIsLoading(false);

      router.push('/');

      return toast('Publicação excluída com sucesso!', {
        position: 'top-right',
        type: 'success',
      });
    }

    toast(
      'Algo deu errado ao criar a publicação! Tente novamente mais tarde.',
      { position: 'top-right', type: 'error' }
    );
  }

  return (
    <main className='px-5 pt-4 flex flex-col items-center'>
      <div className='flex flex-col items-center gap-6 w-full md:max-w-[900px]'>
        {data && data.length > 0 ? (
          data.map(post => (
            <PostCard.Root key={post.id}>
              <PostCard.Title
                postId={post.id}
                title={post.title}
              />

              <div className='flex items-center justify-end gap-1.5 mt-3'>
                <Link href={`/posts/${post.id}`}>
                  <Button
                    variant='outline'
                    className='w-full hover:bg-black hover:text-gray-200 transition-colors'
                  >
                    Mais detalhes
                  </Button>
                </Link>

                <Button
                  isLoading={isLoading}
                  variant='danger'
                  className='hover:bg-red-500 hover:text-gray-200 transition-colors'
                  onClick={() => deletePost(post.id)}
                >
                  Excluir post
                </Button>
              </div>
            </PostCard.Root>
          ))
        ) : (
          <h2 className='text-lg text-center'>
            Você ainda não tem nenhuma publicação.
          </h2>
        )}
      </div>
    </main>
  );
}
