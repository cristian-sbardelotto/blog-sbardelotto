import { prisma } from '@/lib/prisma';

type PostDetailsProps = {
  params: {
    id: string;
  };
};

export default async function PostDetails({ params }: PostDetailsProps) {
  const post = await prisma.post.findUnique({
    where: {
      id: params.id,
    },
  });

  return (
    <div>
      <h2 className='text-xl font-bold'>{post?.title}</h2>
      <p>{post?.content}</p>
    </div>
  );
}
