
import { LoadingView, PageHeader } from "../../components"
import { useContext } from 'react';
import { CategoriesContext } from "../../context";

export const CategoriesPage = () => {

    const { categories, isLoading } = useContext( CategoriesContext );

    if( isLoading ){
        return <LoadingView/>
    } 

    return (
        <>
            <PageHeader path={"/categories/new"} textBtn={"Nueva categoria"} title={"Lista de categorias"}/>
            {
                categories.map( category => (
                    <h1 key={ category.id }>{ category.name }</h1>
                ))
            }
        </>
    )
}
