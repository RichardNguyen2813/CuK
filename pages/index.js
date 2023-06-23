import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <head>
          <title> ST You Need</title>
        </head>
        <main className="bg-gray-200 rounded-xl p-8 dark:bg-slate-800 h-screen w-screen grid justify-items-center items-center  ">
          
          <div className="text-center p-6 px-4 rounded-lg bg-white ">
            <p className="p-2">Hi, we are trying to build a web project</p>
            <button
              onClick={() => signIn("google")}
              className="bg-gray-300 p-2 px-4 rounded-lg"
            >
              Login with Google
            </button>
          </div>
          
        </main>
      </div>
    );
  }

  return (
    <div className="bg-gray-200 min-h-screen flex">
      <Nav />
      <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
        logged in {session.user.email}
      </div>
    </div>
  );
}
