import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { decrypt } from '@app/_lib/session';

export default async function middleware(req, res, next) {
  // 1. Checkeamos si la ruta esta protegida

  const protectedRoutes = ['/dashboard'];
  const currentPath = req.nextUrl.pathname;
  const isProtected = protectedRoutes.includes(currentPath);

  if (isProtected) {
    // 2. Chekeamos la validadcion de sesion
    const cookie = cookies().get('session')?.value;
    const session = await decrypt(cookie);

    console.log(session);

    // 3. Chekeamos si el usuario tiene permisos
    if (!session?.userId) {
      return NextResponse.redirect(new URL('/login', req.nextUrl));
    }
  }

  // 4. Renderizamos la pagina
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image).*)'],
};
