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
    select: {
      title: true,
      content: true,
    },
  });

  if (!post) {
    return (
      <h2 className='text-3xl text-center'>
        <span className='text-red-400'>Erro: </span>Publicação não foi
        encontrada!
      </h2>
    );
  }

  return (
    <article className='px-4 py-4'>
      <h2 className='mb-4 text-center text-3xl font-medium break-words'>
        {post.title}
      </h2>
      <p className='break-words'>{post.content}</p>
    </article>
  );
}
