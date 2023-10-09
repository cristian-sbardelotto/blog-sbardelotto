/* eslint-disable quotes */
/* eslint-disable indent */

'use client';

import { useState } from 'react';

import { useFetch } from '@/hooks/useFetch';
import { disableScroll, enableScroll } from '@/utils/pageScroll';

import { Button } from '@/components/Button';
import { PostCard } from '@/components/PostCard';
import { Modal } from '@/components/Modal';
import { SearchInput } from '@/components/SearchInput';

import { Post } from '@prisma/client';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Plus } from 'lucide-react';
import { PostForm } from './PostForm';

type PostProps = Post & {
  createdBy: {
    name: string;
  };
};

export function PostsList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const { data } = useFetch<PostProps[]>('/api/posts');

  if (!data) return;

  const filteredPosts = inputValue
    ? data.filter(
        post =>
          post.title.includes(inputValue) || post.content.includes(inputValue)
      )
    : data;

  isModalOpen ? disableScroll() : enableScroll();

  return (
    <main className='px-5 pt-7'>
      {isModalOpen && (
        <Modal>
          <PostForm onCancel={() => setIsModalOpen(false)} />
        </Modal>
      )}

      <div className='flex justify-between items-center mb-6'>
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

      <div className='space-y-6 mb-6'>
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
      </div>
    </main>
  );
}
