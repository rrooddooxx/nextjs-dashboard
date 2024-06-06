import SideNav from '../ui/dashboard/sidenav';

export default function DashboardLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <main className="flex h-screen w-full flex-col md:flex-row">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-12 md:overflow-y-auto">{children}</div>
    </main>
  );
}
