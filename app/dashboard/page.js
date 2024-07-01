import { cookies } from "next/headers";

export default function DashboardPage() {

  const cookie = cookies().get('session');
  console.log(cookie);
  return (
    <div>
      <h1>Bienvenido al panel de control</h1>
    </div>
  );
}
