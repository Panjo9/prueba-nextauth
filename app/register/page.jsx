'use client';

// import { useActionState } from "react";
import { registro } from '@app/_lib/actions';
import ButtonAuth from '@ui/button-auth';
import { useFormState } from 'react-dom';

const initialForm = {
  name: '',
  email: '',
  role: '',
  password: '',
};

export default function RegisterPage() {
  const [state, action] = useFormState(registro, initialForm); // puede ser null el 2do parámetro

  return (
    <div className="flex flex-col items-center justify-center gap-y-4 border border-solid border-black rounded-xl p-4 bg-white">
      <span className="text-2xl">Registrate</span>
      <form className="flex flex-col items-center gap-y-2" action={action}>
        <input className="border border-solid border-black rounded p-2" name="name" placeholder="Nombre" />
        {state?.errors?.name?.[0] && <span className="text-red-500">{state.errors.name[0]}</span>}
        <input className="border border-solid border-black rounded p-2" type="email" name="email" placeholder="Email" />
        {state?.errors?.email?.[0] && <span className="text-red-500">{state.errors.email[0]}</span>}
        {/* <input name="role" placeholder="Rol" className="border border-solid border-black rounded p-2" /> */}
        <select name="role" id="role" className="border border-solid border-black rounded p-2 w-full">
          <option value="admin">Admin</option>
          <option value="user">Usuario</option>
        </select>
        {state?.errors?.role?.[0] && <span className="text-red-500">{state.errors.role[0]}</span>}
        <input
          className="border border-solid border-black rounded p-2"
          type="password"
          name="password"
          placeholder="Contraseña"
        />
        {state?.errors?.password?.[0] && <span className="text-red-500">{state.errors.password[0]}</span>}
        <ButtonAuth>Registrarse</ButtonAuth>
        {state?.succesful && <span>{state.succesful}</span>}
      </form>
    </div>
  );
}
