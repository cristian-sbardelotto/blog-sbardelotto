import { Button } from '@/components/Button';
import { useAuth } from '@/hooks/useAuth';
import { MouseEventHandler } from 'react';

export function LoggedOutScreen() {
  const { signIn } = useAuth();

  return (
    <main className='flex flex-col items-center px-2 mt-6'>
      <h2 className='text-2xl font-bold mb-4'>Você não está autenticado. 😥</h2>
      <p className='text-center px-4'>
        Por favor, faça o login para ver as publicações mais recentes no seu
        feed!
      </p>

      <Button
        className='mt-12 px-8 hover:bg-black hover:text-gray-200 transition-colors'
        variant='outline'
        onClick={signIn as MouseEventHandler<HTMLButtonElement>}
      >
        Fazer Login
      </Button>
    </main>
  );
}
