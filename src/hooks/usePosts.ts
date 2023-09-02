import { Post } from '@prisma/client';
import { useEffect, useState } from 'react';

type PostsProps = Post & {
  createdBy: {
    name: string;
  };
};

export function usePosts() {
  const [posts, setPosts] = useState<PostsProps[]>([]);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch('/api/posts');
      const data = await response.json();

      setPosts(data);
    }

    getPosts();
  }, []);

  return { posts };
}
