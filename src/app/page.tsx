import { Post } from '@/components/Post';
import { prisma } from '@/lib/prisma';

export default async function Home() {
  const posts = await prisma.post.findMany();

  return (
    <main className='px-5 pt-12 space-y-6'>
      {posts.map(post => (
        <Post.Root key={post.id}>
          <Post.Header
            createdAt={String(post.createdAt)}
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
