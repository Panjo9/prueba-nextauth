'use client';

import { logout } from "@app/_lib/actions";

export default function UserDashboard() {
  return (
    <section>
      <h1>Bienvenido a la tienda</h1>
      <button className="text-center border border-black p-2 hover:bg-gray-300" type="button" onClick={() => logout()}>
        Cerrar sesión
      </button>
    </section>
  );
}
