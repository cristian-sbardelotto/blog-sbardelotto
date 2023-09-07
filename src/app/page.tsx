'use client';

import { LoggedOutScreen } from '@/components/LoggedOutScreen';
import { PostsList } from '@/components/PostsList';
import { useAuth } from '@/hooks/useAuth';

export default function Home() {
  const { isUserLoggedIn } = useAuth();

  return isUserLoggedIn ? <PostsList /> : <LoggedOutScreen />;
}
