import { useContext } from 'react';
import { CategoriesContext } from "../../context";

import { CategoryCard, LoadingView, PageHeader } from "../../components"

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
                    <CategoryCard key={ category.id } category={ category }/>
                ))
            }
        </>
    )
}
