export default function DashboardPage() {
  return (
    <div>
      <p className="">Hola José bienvenido</p>
      <button
        type="button"
        className="border border-solid border-black rounded p-2 hover:bg-slate-300"
        onClick={() => setUser(null)}>
        Cerrar sesión
      </button>
    </div>
  );
}
