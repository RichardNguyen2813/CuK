import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";

export default function NewProduct(){
    return (
        <Layout>
            <h1>Add new product</h1>
            <ProductForm/>
        </Layout>
    )
}