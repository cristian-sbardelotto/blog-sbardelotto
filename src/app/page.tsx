import { Post } from '@/components/Post';
import { prisma } from '@/lib/prisma';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export default async function Home() {
  const posts = await prisma.post.findMany({
    select: {
      content: true,
      id: true,
      title: true,
      createdAt: true,
      createdBy: true,
    },
  });

  return (
    <main className='px-5 pt-12 space-y-6'>
      {posts.map(post => (
        <Post.Root key={post.id}>
          <Post.Header
            createdAt={format(new Date(post.createdAt), "dd 'de' MMM',' yyyy", {
              locale: ptBR,
            })}
            createdBy={post.createdBy.name!}
            postId={post.id}
          />
          <Post.Title
            postId={post.id}
            title={post.title}
          />
          <Post.Content content={post.content} />
        </Post.Root>
      ))}
    </main>
  );
}
