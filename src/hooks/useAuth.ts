import { signIn, signOut, useSession } from 'next-auth/react';

export function useAuth() {
  const { data, status } = useSession();

  const isUserLoggedIn = status === 'authenticated';

  return { data, isUserLoggedIn, signIn, signOut };
}
