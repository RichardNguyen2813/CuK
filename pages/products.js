import Layout from "@/components/Layout";
import Link from "next/link";

export default function Products(){
    return (
        <Layout>
            
            <Link className="bg-violet-800 text-white rounded-md py-1 px-3"  href={'/products/new'}>
                Add new product
            </Link>
        </Layout>
    );
}
