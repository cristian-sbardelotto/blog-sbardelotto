import { NextResponse } from 'next/server';

type ThrowErrorProps = {
  message: string;
  status?: number;
};

export function throwError({ message, status = 400 }: ThrowErrorProps) {
  return new NextResponse(JSON.stringify({ error: { message } }), { status });
}
