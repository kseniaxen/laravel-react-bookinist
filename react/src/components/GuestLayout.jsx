import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import NavigationLayout from "./NavigationLayout";

export default function GuestLayout() {
    const {token} = useStateContext()

    if(token){
        return <Navigate to="/"/> 
    }
    return (
        <div>
            <NavigationLayout />
            <Outlet/>
        </div>
    )
}