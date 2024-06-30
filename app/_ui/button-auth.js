import { useFormStatus } from 'react-dom';

export default function ButtonAuth({ children }) {
  const { pending } = useFormStatus();
  return (
    <button
      className="border border-solid border-black rounded p-2 bg-red-500 hover:bg-red-400 disabled:bg-red-400 text-white text-xs font-bold uppercase"
      type="submit"
      disabled={pending}>
      {pending ? 'Cargando...' : children}
    </button>
  );
}
