import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Row, Col, Image, Badge } from "react-bootstrap";
import { useStateContext } from "../contexts/ContextProvider";
import logoImg from "../assets/img/logo.png";
import axiosClient from "../axios-client.js";
import { useCartCount } from '../hooks/useCartCount';

export default function NavigationLayout() {
    const { user, token, setUser, setToken } = useStateContext();
    const [loading, setLoading] = useState(false);
    const cartCount = useCartCount();

    const onLogout = (e) => {
        e.preventDefault();
        axiosClient.post('/logout')
            .then(() => {
                setUser({})
                setToken(null)
            })
    }

    useEffect(() => {
        if (localStorage.getItem('ACCESS_TOKEN')) {
            setLoading(true);
            axiosClient.get('/user')
                .then(({ data }) => {
                    setLoading(false);
                    setUser(data.data);
                })
        }
    }, []);


    return (
        <Navbar expand="lg" bg="white" data-bs-theme="white">
            <Container className="my-5">
                <Navbar.Brand
                    as={Link}
                    to="/">
                    <Image src={logoImg} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto fs-5">
                        <Nav.Link
                            className="fw-normal"
                            as={Link}
                            to="/catalog">
                            Каталог
                        </Nav.Link>
                        <Nav.Link
                            className="fw-normal"
                            as={Link}
                            to="/reviews">
                            Відгуки
                        </Nav.Link>
                        <Nav.Link
                            className="fw-normal"
                            as={Link}
                            to="/about">
                            Про нас
                        </Nav.Link>
                        <Nav.Link
                            className="fw-normal"
                            as={Link}
                            to="/faq">
                            FAQ
                        </Nav.Link>
                        <Nav.Link
                            className="fw-normal"
                            as={Link}
                            to="/contacts">
                            Контакти
                        </Nav.Link>
                        {!token ? <Nav.Link className="fw-normal" as={Link} to="/login"> Вхiд </Nav.Link> : <Nav.Link className="fw-normal" as={Link} href="#" onClick={onLogout}>Вихiд</Nav.Link>}
                    </Nav>
                    <Row>
                        <Col xs="auto">
                            <Nav.Link
                                as={Link}
                                to={'/cart'}>
                                <i style={{ color: "black", fontSize: "2rem" }} className="bi bi-cart"></i>
                                <Badge pill className="cart-number" bg="success">{cartCount !== 0 ? cartCount : ''}</Badge>
                            </Nav.Link>
                        </Col>
                        {token &&
                            <Col xs="auto" >
                                <Nav.Link
                                    as={Link}
                                    to={user.role_name === 'ROLE_USER' ? "/user" : "/admin"}
                                    className="d-flex">
                                    <i style={{ color: "black", fontSize: "2rem" }} className="bi bi-person-circle"></i>
                                    {
                                        loading ? <p class="placeholder-wave d-flex align-items-center px-2 m-0">
                                            <span class="placeholder">............................</span>
                                        </p> :
                                            <div className="d-flex align-items-center">
                                                <p className="px-2 m-0 fw-normal">{user.name}</p>
                                            </div>
                                    }
                                </Nav.Link>
                            </Col>
                        }
                    </Row>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}