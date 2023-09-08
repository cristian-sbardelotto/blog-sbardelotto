import { prisma } from '@/lib/prisma';
import { throwError } from '@/utils/throwError';
import { Post } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data: Post = await request.json();

  if (!data.title || !data.content) {
    return throwError({ message: 'Algumas informações estão faltando!' });
  }

  if (data.title.length > 100 || data.content.length > 2000) {
    return throwError({
      message: 'O título ou conteúdo excederam o limite de caracteres!',
    });
  }

  const userAlreadyExists = await prisma.user.findFirst({
    where: {
      id: data.userId,
    },
  });

  if (!userAlreadyExists) {
    return throwError({ message: 'Usuário não encontrado!' });
  }

  await prisma.post.create({ data });

  return new NextResponse(
    JSON.stringify({ message: 'Publicação criada com sucesso!' })
  );
}
