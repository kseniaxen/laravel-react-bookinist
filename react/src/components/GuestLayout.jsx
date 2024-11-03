import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import NavigationLayout from "./NavigationLayout";
import FooterLayout from "./FooterLayout";

export default function GuestLayout() {
    const { token } = useStateContext()

    if (token) {
        return <Navigate to="/" />
    }
    return (
        <div className="d-flex flex-column min-vh-100">
            <NavigationLayout />
            <div className="d-flex justify-content-center my-5 pb-5">
                <Outlet />
            </div>
            <FooterLayout />
        </div>
    )
}