import Link from 'next/link';

type PostCardTitleProps = {
  title: string;
  postId: string;
};

export function PostCardTitle({ title, postId }: PostCardTitleProps) {
  return (
    <h3 className='break-all w-fit text-lg text-slate-900 mb-2 hover:underline'>
      <Link href={`/post/${postId}`}>{title}</Link>
    </h3>
  );
}
