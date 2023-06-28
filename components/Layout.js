import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Layout({children}) {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <title>US Coffee</title>
        <meta name="description" content="US Coffee"/>
        <div  className="bg-gray-300 rounded-xl p-8 dark:bg-slate-800 h-screen w-screen grid justify-items-center items-center  ">
          <div className="text-center p-6 px-4 rounded-lg bg-white ">
            <p className="p-2">Hi, we are trying to build a web project</p>
            <button
              onClick={() => signIn("google")}
              className="bg-gray-400 p-2 px-4 rounded-lg"
            >
              Login with Google
            </button>
          </div>
        </div >
      </div>
    );
  }

  return (
    
    <div className="bg-sidebar-bg-color min-h-screen flex text-base">
      <Nav />
      <div className="bg-dk-dark-bg p-4 flex-grow">
        {children}
      </div>
      
      
    </div>
  );
}
