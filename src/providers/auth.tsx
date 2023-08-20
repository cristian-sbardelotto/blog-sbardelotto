'use client';

import { SessionProvider } from 'next-auth/react';

type NextAuthProviderProps = {
  children: React.ReactNode;
};

export function NextAuthProvider({ children }: NextAuthProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
