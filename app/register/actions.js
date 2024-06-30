'use server';

import { userSchema } from '@lib/definitions';
import bcrypt from 'bcrypt';
import { prisma } from '@prisma/cliente';

async function registro(currentUser, req) {
  const rawFormData = Object.fromEntries(req);

  // 1. validar datos
  const validatedFields = userSchema.safeParse(rawFormData);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const {name, email, password} = validatedFields.data;

  // 2. crear usuario

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword,
    },
  });

  const user = await prisma.user.findMany();

  return { user, succesful: 'Usuario creado correctamente' };

  // 3. crear sesión
}

async function main() {
  const user = await prisma.$connect();

  await registro(user, req);

}

export { registro };
