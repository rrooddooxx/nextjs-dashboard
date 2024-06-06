import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="flex">
      <div className="h1">this is my dashboard!</div>
      <div className="font-bold text-blue-400">
        <Link
          href={'/dashboard/customers'}
          title="Go to customers"
          className="a"
        >
          Go to customers
        </Link>
      </div>
    </div>
  );
}
