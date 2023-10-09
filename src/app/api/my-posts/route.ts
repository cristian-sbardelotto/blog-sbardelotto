import { NextResponse } from 'next/server';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!(session?.user as { id: string })?.id) {
    return new NextResponse(JSON.stringify({ error: 'Missing userId' }), {
      status: 400,
    });
  }

  const posts = await prisma.post.findMany({
    where: {
      userId: (session?.user as { id: string })?.id,
    },
  });

  return new NextResponse(JSON.stringify(posts), { status: 200 });
}
