export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4 border border-solid border-black rounded p-4 bg-white">
      <span>Inicio de sesión</span>
      <form className="flex flex-col items-center gap-y-2" action="">
        <input className="border border-solid border-black rounded p-2" name="name" placeholder="Nombre" />
        <input className="border border-solid border-black rounded p-2" type="password" name="password" placeholder="Contraseña" />
        <button className="border border-solid border-black rounded p-2 hover:bg-slate-300" type="submit">
          Logeate
        </button>
      </form>
    </div>
  );
}
