import { prisma } from '@prisma/cliente';
import { verifySession } from '@lib/session';
import { cache } from 'react'; // useCallback de React Server Components

export const getUser = cache(async () => {
  // 1. Verificar si existe sesión
  const session = await verifySession();

  // 2. Fetch data de usuario
  const data = await prisma.user.findMany({
    where: {
      id: session.userId,
    },
  });

  const user = data[0];

  // 3. Filtrar datos de usuario
  const filteredUser = userDTO(user);
  return filteredUser;
});

function userDTO(user) {
  // puede usar taintUniqueValue de React para ocultar datos

  // retornar objeto con datos filtrados
  return {
    name: user.name,
    email: user.email,
    session: user.session,
  };
}
