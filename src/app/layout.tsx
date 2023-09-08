import { NextAuthProvider } from '@/providers/auth';
import type { Metadata } from 'next';
import { Lexend_Deca } from 'next/font/google';
import './globals.css';

import { Header } from '@/components/Header';

const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Blog Sbardelotto',
  description: 'Website para criação e leitura de artigos de diversos temas.',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='pt-br'>
      <body className={`${lexendDeca.className} bg-main`}>
        <NextAuthProvider>
          <Header />

          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
