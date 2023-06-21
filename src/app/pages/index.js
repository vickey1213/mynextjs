import { signIn, signOut, useSession } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {!session && (
        <>
          <button onClick={() => signIn("google")}>Sign in with Google</button>
        </>
      )}
      {session && (
        <>
          <p>Welcome, {session.user.email}!</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  );
}
