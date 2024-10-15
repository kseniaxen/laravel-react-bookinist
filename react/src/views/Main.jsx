import { Row, Col, Container, Image, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavigationLayout from "../components/NavigationLayout";
import person from "../assets/img/person1.png";
import blog from "../assets/img/blog1.jpg";

export default function Main() {
    return (
        <div>
            <NavigationLayout />
            <Container className="image-main" fluid>
                <Row className="px-md-5">
                    <Col className="text-white image-main-style px-5">
                        <h1 className="mb-5">Букіністика - це мистецтво</h1>
                        <p className="mb-5 fs-4">Різного роду стара та старовинна поліграфічна продукція, зібрана в одному місці.</p>
                    </Col>
                </Row>
            </Container>
            <Container className="mb-5 pb-5">
                <Container className="py-5" fluid>
                    <Row>
                        <Col className="my-5 py-5 d-flex justify-content-center">
                            <p className="text-center fs-1 mb-0">
                                "Будинок, в якому немає книги, подібний до тіла, позбавленому душі." - Цицерон
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <h2 className="text-center mb-5">
                        Книжкові експерти
                    </h2>
                    <Row xs={1} md={2} lg={5} className="d-flex justify-content-center">
                        <Col className="d-flex flex-column">
                            <div className="d-flex justify-content-center align-items-center">
                                <Image className="mb-2 h-75 h-md-50" src={person} roundedCircle fluid />
                            </div>
                            <p className="text-center fs-5">Олена Максименко</p>
                        </Col>
                        <Col className="d-flex flex-column">
                            <div className="d-flex justify-content-center align-items-center">
                                <Image className="mb-2 h-75" src={person} roundedCircle fluid />
                            </div>
                            <p className="text-center fs-5">Олена Максименко</p>
                        </Col>
                        <Col className="d-flex flex-column">
                            <div className="d-flex justify-content-center align-items-center">
                                <Image className="mb-2 h-75" src={person} roundedCircle fluid />
                            </div>
                            <p className="text-center fs-5">Олена Максименко</p>
                        </Col>
                        <Col className="d-flex flex-column">
                            <div className="d-flex justify-content-center align-items-center">
                                <Image className="mb-2 h-75" src={person} roundedCircle fluid />
                            </div>
                            <p className="text-center fs-5">Олена Максименко</p>
                        </Col>
                        <Col className="d-flex flex-column">
                            <div className="d-flex justify-content-center align-items-center">
                                <Image className="mb-2 h-75" src={person} roundedCircle fluid />
                            </div>
                            <p className="text-center fs-5">Олена Максименко</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="color-reviews">
                <Container className="py-5">
                    <h2 className="text-center py-5">
                        Що кажуть клієнти
                    </h2>
                    <Row xs={1} md={2} lg={4}>
                        <Col>
                            <Card className="border-0">
                                <Card.Body className="color-reviews">
                                    <Card.Text>
                                        "Я дуже вдячна сайту Bookinist за можливість поринути в своє діло з головою! Оскільки я колекціоную старовинні книжки, тут я змогла знайти все, що мені потрібно. Дякую продавцям за надані екземпляри!"
                                    </Card.Text>
                                    <Card.Title>Ганна</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="border-0">
                                <Card.Body className="color-reviews">
                                    <Card.Text>
                                        "Завжди вчасно отримував потрібний товар, рекомендую даний сервіс усім охочим! Давно шукав, що почитати, та не помилився з вибором."
                                    </Card.Text>
                                    <Card.Title>Ганна</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="border-0">
                                <Card.Body className="color-reviews">
                                    <Card.Text>
                                        "Я дуже вдячна сайту Bookinist за можливість поринути в своє діло з головою! Оскільки я колекціоную старовинні книжки, тут я змогла знайти все, що мені потрібно. Дякую продавцям за надані екземпляри!"
                                    </Card.Text>
                                    <Card.Title>Ганна</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="border-0">
                                <Card.Body className="color-reviews">
                                    <Card.Text>
                                        "Я дуже вдячна сайту Bookinist за можливість поринути в своє діло з головою! Оскільки я колекціоную старовинні книжки, тут я змогла знайти все, що мені потрібно. Дякую продавцям за надані екземпляри!"
                                    </Card.Text>
                                    <Card.Title>Ганна</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container className="my-5 py-5">
                <h2 className="text-center pb-5 mb-5">Книжковий блог</h2>
                <Row xs={1} md={2} className="g-md-5">
                    <Col>
                        <Card className="flex-lg-row flex-column border-0">
                            <Card.Img src={blog} className="rounded-0" />
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <Card.Title>Найпопулярніші книжки року</Card.Title>
                                <Card.Text>
                                    Надія Іванчук
                                </Card.Text>
                                <Link className="text-decoration-none" to="/blog">Читати</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="flex-lg-row flex-column border-0">
                            <Card.Img src={blog} className="rounded-0" />
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <Card.Title>Найпопулярніші книжки року</Card.Title>
                                <Card.Text>
                                    Надія Іванчук
                                </Card.Text>
                                <Link className="text-decoration-none" to="/blog">Читати</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="flex-lg-row flex-column border-0">
                            <Card.Img src={blog} className="rounded-0" />
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <Card.Title>Найпопулярніші книжки року</Card.Title>
                                <Card.Text>
                                    Надія Іванчук
                                </Card.Text>
                                <Link className="text-decoration-none" to="/blog">Читати</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="flex-lg-row flex-column border-0">
                            <Card.Img src={blog} className="rounded-0" />
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <Card.Title>Найпопулярніші книжки року</Card.Title>
                                <Card.Text>
                                    Надія Іванчук
                                </Card.Text>
                                <Link className="text-decoration-none" to="/blog">Читати</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center mt-5">
                        <Button variant="outline-secondary rounded-0 px-5 py-2 fs-4 fw-light">Бiльше</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}