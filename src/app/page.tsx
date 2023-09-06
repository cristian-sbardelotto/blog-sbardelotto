/* eslint-disable indent */
'use client';

import { useState } from 'react';

import { Button } from '@/components/Button';
import { PostCard } from '@/components/PostCard';
import { PostCreationModal } from '@/components/PostCreationModal';
import { SearchInput } from '@/components/SearchInput';
import { usePosts } from '@/hooks/usePosts';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Plus } from 'lucide-react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { posts } = usePosts();

  const filteredPosts = inputValue
    ? posts.filter(
        post =>
          post.title.includes(inputValue) || post.content.includes(inputValue)
      )
    : posts;

  return (
    <>
      {isModalOpen && (
        <PostCreationModal onCancel={() => setIsModalOpen(false)} />
      )}

      <main className='px-5 pt-7 space-y-6'>
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl font-bold'>Posts Recentes</h2>

          <Button
            className='flex items-center hover:border-transparent hover:bg-gradient-to-r hover:from-header-dark-blue hover:to-header-light-blue hover:text-gray-200 transition-colors'
            variant='outline'
            onClick={() => setIsModalOpen(true)}
          >
            <Plus className='inline' /> Novo post
          </Button>
        </div>

        <SearchInput
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
        />

        {filteredPosts.map(post => (
          <PostCard.Root key={post.id}>
            <PostCard.Header
              createdAt={format(
                new Date(post.createdAt),
                "dd 'de' MMM',' yyyy",
                {
                  locale: ptBR,
                }
              )}
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
    </>
  );
}
