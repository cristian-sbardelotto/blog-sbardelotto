import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const posts = await prisma.post.findMany({
    include: {
      createdBy: true,
    },
  });

  if (!posts) {
    return new NextResponse(
      JSON.stringify({ error: 'Something went wrong. Please try again later.' })
    );
  }

  return new NextResponse(JSON.stringify(posts), {
    status: 200,
  });
}
