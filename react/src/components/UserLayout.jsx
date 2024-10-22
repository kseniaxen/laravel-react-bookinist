import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import NavigationLayout from "./NavigationLayout";

export default function UserLayout() {
    const {user, token, setUser, setToken} = useStateContext();

    if(!token){
        return <Navigate to="/login"/>
    }
    
    return (
        <div>
            <NavigationLayout />
            <Outlet/>
        </div>
    )
}