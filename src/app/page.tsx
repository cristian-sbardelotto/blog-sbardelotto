import { Post } from '@/components/Post';

export default function Home() {
  return (
    <main className='px-5 pt-12'>
      <Post.Root>
        <Post.Header />
        <Post.Title />
        <Post.Content />
      </Post.Root>
    </main>
  );
}
