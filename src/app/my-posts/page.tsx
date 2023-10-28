'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/Button';
import { PostCard } from '@/components/PostCard';
import { useFetch } from '@/hooks/useFetch';
import { Post } from '@prisma/client';

export default function MyPosts() {
  const { data } = useFetch<Post[]>('/api/my-posts/');
  const router = useRouter();

  async function deletePost(id: string) {
    await fetch(`/api/my-posts/${id}`, { method: 'DELETE' });

    return router.push('/');
  }

  return (
    <>
      <main className='px-5 pt-4 space-y-6'>
        {data &&
          data.map(post => (
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
                onClick={() => deletePost(post.id)}
              >
                Excluir post
              </Button>
            </PostCard.Root>
          ))}
      </main>
    </>
  );
}
