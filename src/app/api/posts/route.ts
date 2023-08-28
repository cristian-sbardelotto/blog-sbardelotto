import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const posts = await prisma.post.findMany({
    select: {
      content: true,
      id: true,
      title: true,
      createdAt: true,
      createdBy: true,
    },
  });

  return new NextResponse(JSON.stringify(posts), {
    status: 200,
  });
}
