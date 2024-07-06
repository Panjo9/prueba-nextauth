/*** usar JWT ***/
import 'server-only';  // nunca se importará en cliente
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// token
const key = new TextEncoder().encode(process.env.SECRET_KEY_JWT);

// cookie
const cookie = {
  name: 'session',
  options: {
    httpOnly: true,
    secure: true,
    sameSite: 'strict', // 'strict' | 'lax' | 'none',
    path: '/',
  },
  duration: 60 * 60 * 24 * 1000, // 10 days
};

// encryptar

export async function encrypt(payload) {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1day')
    .sign(key);
  return token;
}

// decryptar

export async function decrypt(session) {
  try {
    const { payload } = await jwtVerify(session, key, { algorithms: ['HS256'] });
    return payload;
  } catch (error) {
    return null;
  }
}

// 1. crear sesión
export async function createSession(userId, role) {
  const expires = new Date(Date.now() + cookie.duration);
  const session = await encrypt({ userId, expires, role });

  cookies().set(cookie.name, session, { ...cookie.options, expires });
  redirect('/dashboard');
}

// 2. verificar sesión
export async function verifySession() {
  const cookie = cookies().get(cookie.name)?.value;
  const session = await decrypt(cookie);

  if (!session?.userId) redirect('/login');
  return { userId: session.userId, role: session.role };
}

// 3. eliminar sesión
export async function deleteSession() {
  cookies().delete(cookie.name);
  redirect('/login');
}
