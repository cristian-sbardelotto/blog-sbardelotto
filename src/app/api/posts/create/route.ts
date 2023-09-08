import { prisma } from '@/lib/prisma';
import { Post } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data: Post = await request.json();

  if (!data.title || !data.content) {
    return new NextResponse(
      JSON.stringify({ error: { message: 'Dados inválidos!' } }),
      {
        status: 400,
      }
    );
  }

  if (data.title.length > 100 || data.content.length > 2000) {
    return new NextResponse(
      JSON.stringify({
        error: {
          message: 'O título ou conteúdo excederam o limite de caracteres!',
        },
      }),
      {
        status: 400,
      }
    );
  }

  const userAlreadyExists = await prisma.user.findFirst({
    where: {
      id: data.userId,
    },
  });

  if (!userAlreadyExists) {
    return new NextResponse(
      JSON.stringify({ error: { message: 'Usuário não encontrado!' } }),
      {
        status: 400,
      }
    );
  }

  await prisma.post.create({ data });

  return new NextResponse(
    JSON.stringify({ message: 'Publicação criada com sucesso!' }),
    { status: 200 }
  );
}
