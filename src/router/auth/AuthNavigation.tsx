import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../../pages/auth/LoginPage"


export const AuthNavigation = () => {
    return (
        <Routes>
            <Route path="login" element={ <LoginPage/> }/>
        </Routes>
    )
}