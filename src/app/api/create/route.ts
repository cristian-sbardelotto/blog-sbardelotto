import { prisma } from '@/lib/prisma';
import { Post } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data: Post = await request.json();

  if (!data.content || !data.title) {
    return new NextResponse(
      JSON.stringify({ error: { message: 'Dados inválidos!' } }),
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

  const post = await prisma.post.create({ data });

  return new NextResponse(JSON.stringify(post), { status: 200 });
}
