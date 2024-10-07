import { Row, Col, Container, Image, Card } from "react-bootstrap";
import NavigationLayout from "../components/NavigationLayout";
import person from "../assets/img/person1.png"

export default function Main() {
    return (
        <div>
            <NavigationLayout />
            <Container className="image-main" fluid>
                <Row className="px-5">
                    <Col className="text-white image-main-style px-5">
                        <h1 className="mb-5">Букіністика - це мистецтво</h1>
                        <p className="mb-5 fs-4">Різного роду стара та старовинна поліграфічна продукція, зібрана в одному місці.</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Container fluid>
                    <Row>
                        <Col className="my-5 py-5 d-flex justify-content-center">
                            <p className="text-center fs-1 mb-0">
                                "Будинок, в якому немає книги, подібний до тіла, позбавленому душі." - Цицерон
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <h2 className="text-center">
                        Книжкові експерти
                    </h2>
                    <Row className="d-flex justify-content-between">
                        <Col md="2">
                            <Image src={person} roundedCircle fluid/>
                            <p className="text-center">Олена Максименко</p>
                        </Col>
                        <Col md="2">
                            <Image src={person} roundedCircle fluid/>
                            <p className="text-center">Олена Максименко</p>
                        </Col>
                        <Col md="2">
                            <Image src={person} roundedCircle fluid/>
                            <p className="text-center">Олена Максименко</p>
                        </Col>
                        <Col md="2">
                            <Image src={person} roundedCircle fluid/>
                            <p className="text-center">Олена Максименко</p>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <h2 className="text-center">
                        Що кажуть клієнти
                    </h2>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Text>
                                    "Я дуже вдячна сайту Bookinist за можливість поринути в своє діло з головою! Оскільки я колекціоную старовинні книжки, тут я змогла знайти все, що мені потрібно. Дякую продавцям за надані екземпляри!"
                                    </Card.Text>
                                    <Card.Title>Ганна</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Text>
                                    "Завжди вчасно отримував потрібний товар, рекомендую даний сервіс усім охочим! Давно шукав, що почитати, та не помилився з вибором."
                                    </Card.Text>
                                    <Card.Title>Ганна</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Text>
                                    "Я дуже вдячна сайту Bookinist за можливість поринути в своє діло з головою! Оскільки я колекціоную старовинні книжки, тут я змогла знайти все, що мені потрібно. Дякую продавцям за надані екземпляри!"
                                    </Card.Text>
                                    <Card.Title>Ганна</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
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
        </div>
    )
}