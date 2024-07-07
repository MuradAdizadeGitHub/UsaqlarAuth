import { useContext } from "react"
import { AuthContext } from "../context/Auth"
import { Navigate, Outlet } from "react-router-dom"


function PrivateRoute() {
 const {token} =useContext(AuthContext)
return token ? <Outlet/> : <Navigate to={'/login'}></Navigate>
}



export default PrivateRoute
