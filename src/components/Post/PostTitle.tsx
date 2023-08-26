type PostTitleProps = {
  title: string;
};

export function PostTitle({ title }: PostTitleProps) {
  return <h3 className='text-lg text-slate-900 mb-2'>{title}</h3>;
}
