import { Link, useLocation } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default function AdminNavigationLayout() {
    const location = useLocation();

    return (
        <Nav variant="underline" className="pb-2">
            <Nav.Item>
                <Nav.Link
                    className="text-black"
                    as={Link}
                    to="/admin/orders"
                    eventKey="/admin/orders"
                    active={location.pathname === '/admin/orders'}>
                    Замовлення
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    className="text-black"
                    as={Link}
                    to="/admin/settings"
                    eventKey="/admin/settings"
                    active={location.pathname === '/admin/settings'}>
                    Налаштування
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}