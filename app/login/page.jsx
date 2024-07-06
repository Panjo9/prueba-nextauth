'use client';

import { useFormState } from 'react-dom';
import ButtonAuth from '@ui/button-auth';
import { login } from '@app/_lib/actions';

const initialForm = {
  email: '',
  password: '',
};

export default function LoginPage() {
  const [state, action] = useFormState(login, initialForm);

  return (
    <div className="flex flex-col items-center justify-center gap-y-4 border border-solid border-black rounded-xl p-4 bg-white">
      <span className="text-2xl">Inicio de sesión</span>
      <form className="flex flex-col items-center gap-y-2" action={action}>
        <input className="border border-solid border-black rounded p-2" type="email" name="email" placeholder="Email" />
        {state?.errors?.email?.[0] && <span className="text-red-500">{state.errors.email[0]}</span>}
        <input
          className="border border-solid border-black rounded p-2"
          type="password"
          name="password"
          placeholder="Contraseña"
        />
        {state?.errors?.password?.[0] && <span className="text-red-500">{state.errors.password[0]}</span>}
        <ButtonAuth>Logeate</ButtonAuth>
        {state?.succesful && <span>{state.succesful}</span>}
      </form>
    </div>
  );
}
