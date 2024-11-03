import { Row, Col, Container, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoImg from "../assets/img/logo.png";
import partner1 from "../assets/img/partner1.png";
import partner2 from "../assets/img/partner2.png";
import partner3 from "../assets/img/partner3.png";
import partner4 from "../assets/img/partner4.png";

export default function FooterLayout() {
    return (
        <Container fluid className="color-back-green mt-auto">
            <Container className="py-5">
                <Row xs={1} md={2} lg={4} className="py-5 my-5">
                    <Col>
                        <h3 className="mb-4 text-center text-md-start title">Книжки</h3>
                        <Nav className="d-flex flex-column">
                            <Nav.Link
                                className="p-0 my-2 text-black text-center text-md-start fs-5"
                                as={Link}
                                to="/">
                                Кошик
                            </Nav.Link>
                            <Nav.Link
                                className="p-0 my-2 text-black text-center text-md-start fs-5"
                                as={Link}
                                to="/catalog">
                                Каталог
                            </Nav.Link>
                            <Nav.Link
                                className="p-0 my-2 text-black text-center text-md-start fs-5"
                                as={Link}
                                to="/user">
                                Кабiнет
                            </Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                        <h3 className="mb-4 text-center text-md-start title">Наш сайт</h3>
                        <Nav className="d-flex flex-column">
                            <Nav.Link
                                className="p-0 my-2 text-black text-center text-md-start fs-5"
                                as={Link}
                                to="/about">
                                Про нас
                            </Nav.Link>
                            <Nav.Link
                                className="p-0 my-2 text-black text-center text-md-start fs-5"
                                as={Link}
                                to="/contacts">
                                Контакти
                            </Nav.Link>
                            <Nav.Link
                                className="p-0 my-2 text-black text-center text-md-start fs-5"
                                as={Link}
                                to="/blog">
                                Наш блог
                            </Nav.Link>
                            <Nav.Link
                                className="p-0 my-2 text-black text-center text-md-start fs-5"
                                as={Link}
                                to="/faq">
                                FAQ
                            </Nav.Link>
                            <Nav.Link
                                className="p-0 my-2 text-black text-center text-md-start fs-5"
                                as={Link}
                                to="/delivery">
                                Доставка
                            </Nav.Link>
                            <Nav.Link
                                className="p-0 my-2 text-black text-center text-md-start fs-5"
                                href="/">
                                На головну
                            </Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                        <p className="text-center text-md-start fs-5 fst-italic">
                            "Книги - це дорога до знань. А букіністика - провідник світом старовинних видань, якими ми, букіністи, так бажаємо заволодіти."
                        </p>
                        <p className="text-center text-md-start">Засновник Bookinist</p>
                    </Col>
                    <Col>
                        <h3 className="pb-5 text-center text-md-start title">Будьте на зв'язку!</h3>
                        <p className="text-center text-md-start">Не соромтеся написати нам на пошту або зателефонувати. Ми будемо раді отримати відгук.</p>
                        <div className="d-flex mb-4 justify-content-between">
                            <Nav.Link
                                as={Link}
                                to="/"
                                className="d-flex align-items-center">
                                <Image src={logoImg} alt="Logo" />
                            </Nav.Link>
                            <div className="ps-4">
                                <div className="d-flex mb-4">
                                    <i style={{ color: "black", fontSize: "1rem" }} className="bi bi-telephone me-2"></i>
                                    <Nav.Link
                                        href="tel:+380000000000">
                                        +380000000000
                                    </Nav.Link>
                                </div>
                                <div className="d-flex">
                                    <i style={{ color: "black", fontSize: "1rem" }} className="bi bi-envelope me-2"></i>
                                    <Nav.Link
                                        href="mailto:info@bookin1st.ua">
                                        info@bookin1st.ua
                                    </Nav.Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Nav>
                                <Nav.Link
                                className="p-0 px-2"
                                    href="#">
                                        <i style={{ color: "black", fontSize: "1.5rem" }} className="bi bi-facebook"></i>
                                </Nav.Link>
                                <Nav.Link
                                className="p-0 px-2"
                                    href="#">
                                        <i style={{ color: "black", fontSize: "1.5rem" }} className="bi bi-youtube"></i>
                                </Nav.Link>
                                <Nav.Link
                                className="p-0 px-2"
                                    href="#">
                                        <i style={{ color: "black", fontSize: "1.5rem" }} className="bi bi-instagram"></i>
                                </Nav.Link>
                                <Nav.Link
                                className="p-0 px-2"
                                    href="#">
                                        <i style={{ color: "black", fontSize: "1.5rem" }} className="bi bi-twitter-x"></i>
                                </Nav.Link>
                            </Nav>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>© Bookinist, {new Date().getFullYear()}</p>
                    </Col>
                    <Col>
                        <Image src={partner1} alt="Partner" className="me-2" />
                        <Image src={partner2} alt="Partner" className="me-2" />
                        <Image src={partner3} alt="Partner" className="me-2" />
                        <Image src={partner4} alt="Partner" className="me-2" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}