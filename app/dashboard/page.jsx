import { cookies } from 'next/headers';
import { decrypt } from '@app/_lib/session';
import AdminDashboard from '@app/_ui/AdminDashboard';
import UserDashboard from '@app/_ui/UserDashboard';

export default async function DashboardPage() {
  const cookie = cookies().get('session')?.value;
  const { role } = await decrypt(cookie);

  if (role === 'admin') {
    return <AdminDashboard />;
  }

  return <UserDashboard />;
}
