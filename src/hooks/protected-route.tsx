
import { Navigate, Outlet } from 'react-router'



function ProtectedRoute() {
    const role = localStorage.getItem("role")

    return (
        role == "super-admin" || role == "agency" ? <Outlet/> : <Navigate to={"/login"} />
    )
}

export default ProtectedRoute