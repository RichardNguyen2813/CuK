import Layout from "@/components/Layout";
import { useSession, signIn, signOut  } from "next-auth/react";

export default function Home() {
    const {data: session} = useSession();
    console.log({session});
    return <Layout >
        test
        <div className="text-white">
            <title>US Coffee</title>
            <h2>
                Hello, {session?.user?.name}
            </h2>
            hi
        </div>
    </Layout>
}

