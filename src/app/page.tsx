'use client'
import LoginForm from "./login/page";
import Dashboard from "./dashboard/page";

export default function Home() {
  const token = typeof localStorage !== 'undefined' ? localStorage.getItem('authToken') || '' : '';

  return <>{token ? <Dashboard /> : <LoginForm />}</>;
}
