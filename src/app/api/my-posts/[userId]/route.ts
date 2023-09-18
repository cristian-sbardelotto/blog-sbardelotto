import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

type UserPostsRouteProps = {
  params: {
    userId: string;
  };
};

export async function GET(
  request: Request,
  { params: { userId } }: UserPostsRouteProps
) {
  if (!userId) {
    return {
      status: 400,
      body: {
        message: 'Missing userId',
      },
    };
  }

  const reservations = await prisma.post.findMany({
    where: {
      userId,
    },
  });

  return new NextResponse(JSON.stringify(reservations), { status: 200 });
}
