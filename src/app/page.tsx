/* eslint-disable indent */
'use client';

import { useEffect, useState } from 'react';

import { Input } from '@/components/Input';
import { PostCard } from '@/components/PostCard';
import { Post } from '@prisma/client';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

type PostsProps = Post & {
  createdBy: {
    name: string;
  };
};

export default function Home() {
  const [posts, setPosts] = useState<PostsProps[]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    async function getPosts() {
      const response = await fetch('/api/posts');
      const data = await response.json();

      setPosts(data);
    }

    getPosts();
  }, []);

  const filteredPosts = inputValue
    ? posts.filter(
        post =>
          post.title.includes(inputValue) || post.content.includes(inputValue)
      )
    : posts;

  return (
    <main className='px-5 pt-10 space-y-6'>
      <Input
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
      />

      {filteredPosts.map(post => (
        <PostCard.Root key={post.id}>
          <PostCard.Header
            createdAt={format(new Date(post.createdAt), "dd 'de' MMM',' yyyy", {
              locale: ptBR,
            })}
            createdBy={post.createdBy.name!}
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
