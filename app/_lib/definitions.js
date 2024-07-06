import { z } from 'zod';

const userSchema = z.object({
  name: z
    .string({
      invalid_type_error: 'El nombre debe ser una cadena',
    })
    .min(2),
  email: z
    .string({
      invalid_type_error: 'El email es inválido',
    })
    .email(),
  role: z.string({
    required_error: 'El rol es obligatorio',
    invalid_type_error: 'El rol debe ser una cadena',
  }),
  password: z
    .string({
      invalid_type_error: 'La contraseña debe ser una cadena',
    })
    .min(6),
});

const loginSchema = z.object({
  email: z
    .string({
      invalid_type_error: 'El email es inválido',
    })
    .email(),
  password: z
    .string({
      invalid_type_error: 'La contraseña debe ser una cadena',
    })
    .min(6),
});

export { userSchema, loginSchema };
