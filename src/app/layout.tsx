import type { Metadata } from 'next';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
