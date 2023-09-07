import { PostForm } from './PostForm';

type PostCreationModalProps = {
  onCancel: () => void;
};

export function PostCreationModal({ onCancel }: PostCreationModalProps) {
  return (
    <div className='absolute inset-0 z-50 px-4 w-full h-screen flex items-center justify-center bg-shadow-transparent'>
      <PostForm onCancel={onCancel} />
    </div>
  );
}
