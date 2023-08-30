import { X } from 'lucide-react';

type PostCreationModalProps = {
  onFinish: () => void;
  onCancel: () => void;
};

export function PostCreationModal({
  onFinish,
  onCancel,
}: PostCreationModalProps) {
  return (
    <div className='absolute inset-0 z-50 px-4 w-full h-screen flex items-center justify-center bg-shadow-transparent'>
      <div className='p-8 rounded-lg shadow-xl bg-gray-100 w-full'>
        <div className='mb-3 pb-3 flex justify-between items-center border-b border-gray-light'>
          <h2 className='text-xl font-medium'>Novo post</h2>

          <button onClick={onCancel}>
            <X
              className='h-fit'
              size={22}
            />
          </button>
        </div>

        <div className='flex flex-col gap-1'>
          <label
            htmlFor='title'
            className='text-sm'
          >
            Título da publicação
          </label>

          <input
            id='title'
            placeholder='Digite seu título'
            className='mb-6 p-2 border border-gray-600 bg-transparent outline-none rounded-md font-sans focus:border-black transition-colors'
          />
        </div>

        <textarea
          placeholder='Conteúdo da publicação...'
          className='h-[25vh] w-full p-2 outline-none font-sans bg-transparent border border-gray-600 rounded-lg focus:border-black transition-colors'
        />

        <div className='flex gap-3 justify-end'>
          <button onClick={onCancel}>Cancelar</button>

          <button onClick={onFinish}>Publicar</button>
        </div>
      </div>
    </div>
  );
}
