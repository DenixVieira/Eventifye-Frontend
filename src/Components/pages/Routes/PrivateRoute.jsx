import { Navigate, useLocation } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { Container } from "../Layout/Container"
import { Navbar } from "../Layout/Navbar"

export const PrivateRoute = ({ element }) => {
    let isAuth = true
    return isAuth ? (
        <>
            <Navbar />
            <Container customClass='min_height'>
                {element}
            </Container>
        </>

    ) : (
        <Navigate to={"/login"} replace />
    )
}
