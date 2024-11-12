import NavigationLayout from "../components/NavigationLayout";
import FooterLayout from "../components/FooterLayout";
import { Container, Row, Col, Nav } from "react-bootstrap";

export default function Contacts() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <NavigationLayout />
            <Container className="py-5 my-lg-5">
                <Row>
                    <Col>
                        <h1 className="title text-center title__h2 py-5">
                            Контакти
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <p className="title fs-4">Якщо у вас виникли питання, зв'яжіться з нами будь-яким зручним для вас способом.</p>
                    </Col>
                </Row>
                <Row className="pb-5">
                    <Col className="d-flex flex-md-row flex-column justify-content-center">
                        <div className="d-flex justify-content-center px-4">
                            <i style={{ color: "black", fontSize: "2rem" }} className="bi bi-telephone me-2"></i>
                            <Nav.Link
                                className="fs-4"
                                href="tel:+380000000000">
                                +380000000000
                            </Nav.Link>
                        </div>
                        <div className="d-flex justify-content-center px-4">
                            <i style={{ color: "black", fontSize: "2rem" }} className="bi bi-envelope me-2"></i>
                            <Nav.Link
                                className="fs-4"
                                href="mailto:info@bookin1st.ua">
                                info@bookin1st.ua
                            </Nav.Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Nav className="d-flex flex-md-row flex-column justify-content-center">
                        <Nav.Link
                            className="p-0 px-4 d-flex justify-content-center"
                            href="#">
                            <i style={{ color: "black", fontSize: "3rem" }} className="bi bi-facebook"></i>
                        </Nav.Link>
                        <Nav.Link
                            className="p-0 px-4 d-flex justify-content-center"
                            href="#">
                            <i style={{ color: "black", fontSize: "3rem" }} className="bi bi-youtube"></i>
                        </Nav.Link>
                        <Nav.Link
                            className="p-0 px-4 d-flex justify-content-center"
                            href="#">
                            <i style={{ color: "black", fontSize: "3rem" }} className="bi bi-instagram"></i>
                        </Nav.Link>
                        <Nav.Link
                            className="p-0 px-4 d-flex justify-content-center"
                            href="#">
                            <i style={{ color: "black", fontSize: "3rem" }} className="bi bi-twitter-x"></i>
                        </Nav.Link>
                    </Nav>
                </Row>
            </Container>
            <FooterLayout />
        </div>
    );
}