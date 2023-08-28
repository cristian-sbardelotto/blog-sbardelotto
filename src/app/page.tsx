'use client';

import { useEffect, useState } from 'react';

import { Input } from '@/components/Input';
import { PostCard } from '@/components/PostCard';
import { Post } from '@prisma/client';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch('/api/posts');
      const data = await response.json();

      setPosts(data);
    }

    getPosts();
  }, []);

  return (
    <main className='px-5 pt-10 space-y-6'>
      <Input />

      {posts.map(post => (
        <PostCard.Root key={post.id}>
          <PostCard.Header
            createdAt={format(new Date(post.createdAt), "dd 'de' MMM',' yyyy", {
              locale: ptBR,
            })}
            createdBy={post.title}
            postId={post.id}
          />
          <PostCard.Title
            postId={post.id}
            title={post.title}
          />
          <PostCard.Content content={post.content} />
        </PostCard.Root>
      ))}
    </main>
  );
}
