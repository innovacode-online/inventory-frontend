import { Typography } from "@mui/material"
import { useSale } from "../../hooks/useSale"

import { LoadingView, PageHeader, SaleCard } from "../../components";

export const SalesPage = () => {

    const { sales, isLoading } = useSale();

    console.log(sales);

    if( isLoading ){
        return <LoadingView/>
    }  

    return (
        <>
            <PageHeader path={'/sales/new'} textBtn={"Nueva venta"} title={"Gestion de ventas"}/>
            {
                sales.map(sale => (
                    <SaleCard key={ sale.id }  sale={ sale }/>
                ))
            }
        </>
    )
}
