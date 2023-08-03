import { useContext } from "react"
import { PageHeader, ProductCard } from "../../components"
import { ProductsContext } from "../../context"

export const ProductsPage = () => {
    
    const { products } = useContext( ProductsContext );
    
    return (
        <>
            <PageHeader 
                path={"/products/new"} 
                textBtn={"Agregar producto"} 
                title={"Gestion de productos"}
            />

            {
                products.map(product => (
                    <ProductCard product={product} key={ product.id }/>
                ))

            }
        
        </>
    )
}