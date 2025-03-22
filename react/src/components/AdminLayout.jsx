import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import NavigationLayout from "./NavigationLayout";
import FooterLayout from "./FooterLayout";

export default function AdminLayout() {
    const {user, token, setUser, setToken} = useStateContext();

    if(!token){
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