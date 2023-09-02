import { prisma } from '@/lib/prisma';
import { Post } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data: Post = await request.json();

  const post = await prisma.post.create({
    data,
  });

  return new NextResponse(JSON.stringify(post), { status: 200 });
}
