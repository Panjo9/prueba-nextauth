'use client';

import { logout } from '@app/_lib/actions';

export default function AdminDashboard() {
  return (
    <section>
      <h1>Bienvenido al panel de control</h1>
      <button className="text-center border border-black p-2 hover:bg-gray-300" type="button" onClick={() => logout()}>
        Cerrar sesión
      </button>
    </section>
  );
}
