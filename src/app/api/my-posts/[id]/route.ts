import { NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

type DeleteRouteProps = {
  params: {
    id: string;
  };
};

export async function DELETE(request: Request, { params }: DeleteRouteProps) {
  if (!params.id) {
    return NextResponse.json(
      { error: 'Missing postId' },
      {
        status: 400,
      }
    );
  }

  try {
    await prisma.post.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json('Post deleted successfully.', {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { error },
      {
        status: 400,
      }
    );
  }
}
