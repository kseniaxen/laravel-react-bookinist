import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function UserLayout() {
    const {user, token} = useStateContext()

    if(!token){
        return <Navigate to="/login"/>
    }
    
    return (
        <div>
            Only for user
            <Outlet/>
        </div>
    )
}