import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import NavigationLayout from "./NavigationLayout";
import FooterLayout from "./FooterLayout";

export default function UserLayout() {
    const {user, token, setUser, setToken} = useStateContext();

    if(!token && user.role_name === "ROLE_ADMIN"){
        return <Navigate to="/login"/>
    }
    
    return (
        <div>
            <NavigationLayout />
            <Outlet/>
            <FooterLayout />
        </div>
    )
}