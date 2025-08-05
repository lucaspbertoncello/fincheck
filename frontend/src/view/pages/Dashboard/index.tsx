import { useAuth } from "../../../app/hooks/useAuth";

export function Dashboard() {
  const { signout } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <button onClick={signout}>signout</button>
    </div>
  );
}
