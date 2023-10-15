import { NextRequest, NextResponse } from 'next/server';

const isAuthenticated = (request) => {
  if (process.env.ENABLE_BASIC_AUTH !== 'true') return true;

  const authHeader = request.headers.get('authorization') || request.headers.get('Authorization');
  if (!authHeader) return false;

  const auth = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
  const user = auth[0];
  const pass = auth[1];

  return user === process.env.BASIC_AUTH_USERNAME && pass === process.env.BASIC_AUTH_PASSWORD;
};

export function middleware(request) {
  if (!isAuthenticated(request)) {
    return new NextResponse('Authentication required', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic' },
    });
  }

  return NextResponse.next();
}
