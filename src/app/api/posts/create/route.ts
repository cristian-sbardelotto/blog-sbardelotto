import { prisma } from '@/lib/prisma';
import { throwError } from '@/utils/throwError';
import { Post } from '@prisma/client';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const postSchema = z.object({
  title: z
    .string()
    .nonempty('O título é obrigatório!')
    .max(100, 'O título pode ter no máximo 100 caracteres!'),
  content: z
    .string()
    .nonempty('O conteúdo é obrigatório!')
    .max(2000, 'O conteúdo pode ter no máximo 2.000 caracteres!'),
  userId: z.string().nonempty('O ID do usuário é obrigatório!'),
});

export async function POST(request: Request) {
  const data = await request.json();

  const userAlreadyExists = await prisma.user.findFirst({
    where: {
      id: data.userId,
    },
  });

  if (!userAlreadyExists) {
    return throwError({ message: 'Usuário não encontrado!' });
  }

  try {
    await prisma.post.create({ data: postSchema.parse(data) as Post });
  } catch (error) {
    return throwError({ message: error as string });
  }

  return new NextResponse(
    JSON.stringify({ message: 'Publicação criada com sucesso!' })
  );
}
