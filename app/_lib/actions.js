'use server';

import { userSchema, loginSchema } from '@lib/definitions';
import bcrypt from 'bcrypt';
import { prisma } from '@prisma/cliente';
import { redirect } from 'next/navigation';
import { createSession, deleteSession } from '@lib/session';

async function registro(currentUser, req) {
  const rawFormData = Object.fromEntries(req);

  // 1. validar datos
  const validatedFields = userSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password, role } = validatedFields.data;

  // 1.5 validar usuario

  const user = await prisma.user.findMany({
    where: {
      email,
    },
  });

  if (user[0]) {
    return {
      errors: {
        email: ['El email ya existe'],
      },
    };
  }

  // 2. crear usuario

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role,
    },
  });

  // // 3. crear sesión
  // await createSession(user.id);

  // 3. redireccionar
  redirect('/login');
}

async function login(currentUser, req) {
  const rawFormData = Object.fromEntries(req);

  // 1. validar datos
  const validatedFields = loginSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  // 2. verificar usuario
  const [user] = await prisma.user.findMany({
    where: {
      email,
    },
  });

  if (!user) {
    return {
      errors: {
        email: ['El email no existe'],
      },
    };
  }

  // 3. verificar contraseña
  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return {
      errors: {
        password: ['La contraseña es incorrecta'],
      },
    };
  }

  // 4. crear sesión
  await createSession(user.id, user.role);
}

async function logout() {
  await deleteSession();
}

async function main() {
  const user = await prisma.$connect();

  await registro(user, req);
  await login(user, req);
}

export { registro, login, logout };
