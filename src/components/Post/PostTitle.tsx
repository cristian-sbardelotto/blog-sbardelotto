import Link from 'next/link';

type PostTitleProps = {
  title: string;
  postId: string;
};

export function PostTitle({ title, postId }: PostTitleProps) {
  return (
    <h3 className='w-fit text-lg text-slate-900 mb-2 hover:underline'>
      <Link href={`/post/${postId}`}>{title}</Link>
    </h3>
  );
}
