import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Row, Col, Image } from "react-bootstrap";
import { useStateContext } from "../contexts/ContextProvider";
import logoImg from "../assets/img/logo.png";
import axiosClient from "../axios-client";

export default function NavigationLayout() {
    const { user, token, setUser, setToken } = useStateContext();
    const [isLoading, setIsLoading] = useState(false);

    const onLogout = (e) => {
        e.preventDefault();
        axiosClient.post('/logout')
            .then(() => {
                setUser({})
                setToken(null)
            })
    }

    useEffect(() => {
        setIsLoading(true);
        axiosClient.get('/user')
            .then(({ data }) => {
                setIsLoading(false);
                setUser(data)
            })
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
                            as={Link}
                            to="/catalog">
                            Каталог
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/reviews">
                            Відгуки
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/faq">
                            FAQ
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/contacts">
                            Контакти
                        </Nav.Link>
                        {!token ? <Nav.Link as={Link} to="/login"> Вхiд </Nav.Link> : <Nav.Link as={Link} href="#" onClick={onLogout}>Вихiд</Nav.Link>}
                    </Nav>
                    {token &&
                        <Row>
                            <Col xs="auto" >
                                <Nav.Link
                                    as={Link}
                                    to="/user"
                                    className="d-flex">
                                    <i style={{ color: "black", fontSize: "2rem" }} className="bi bi-person-circle"></i>
                                    {
                                        isLoading ? <p class="placeholder-glow d-flex align-items-center px-2 m-0">
                                                        <span class="placeholder">Loading</span>
                                                    </p>:
                                                    <div className="d-flex align-items-center">
                                                        <p className="px-2 m-0">{user.name}</p>
                                                    </div>
                                    }
                                </Nav.Link>
                            </Col>
                        </Row>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}