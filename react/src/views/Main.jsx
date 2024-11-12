import { Row, Col, Container, Image, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavigationLayout from "../components/NavigationLayout";
import person1 from "../assets/img/person1.png";
import person2 from "../assets/img/person2.png";
import person3 from "../assets/img/person3.png";
import person4 from "../assets/img/person4.png";
import person5 from "../assets/img/person5.png";
import blog from "../assets/img/blog1.jpg";
import FooterLayout from "../components/FooterLayout";

export default function Main() {
    return (
        <div>
            <NavigationLayout />
            <Container className="image-main" fluid>
                <Row className="px-md-5">
                    <Col className="text-white image-main-style px-5">
                        <h1 className="mb-5 title title__h1">Букіністика - це мистецтво</h1>
                        <p className="mb-5 title fs-4">Різного роду стара та старовинна поліграфічна <br /> продукція, зібрана в одному місці.</p>
                    </Col>
                </Row>
            </Container>
            <Container className="mb-5 pb-5">
                <Container className="py-5" fluid>
                    <Row className="justify-content-center">
                        <Col md={9} className="my-5 py-5 d-flex">
                            <h2 className="text-center title title__h2 fst-italic mb-0">
                                "Будинок, в якому немає книги, подібний до тіла, позбавленому душі." - Цицерон
                            </h2>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <h2 className="text-center mb-5 title title__h2">
                        Книжкові експерти
                    </h2>
                    <Row xs={1} md={2} lg={5} className="d-flex justify-content-center">
                        <Col className="d-flex flex-column">
                            <div className="d-flex justify-content-center align-items-center">
                                <Image className="mb-2 h-75 h-md-50" src={person1} roundedCircle fluid />
                            </div>
                            <p className="text-center fs-4 title">Олена Максименко</p>
                        </Col>
                        <Col className="d-flex flex-column">
                            <div className="d-flex justify-content-center align-items-center">
                                <Image className="mb-2 h-75" src={person2} roundedCircle fluid />
                            </div>
                            <p className="text-center fs-4 title">Оксана Красних</p>
                        </Col>
                        <Col className="d-flex flex-column">
                            <div className="d-flex justify-content-center align-items-center">
                                <Image className="mb-2 h-75" src={person3} roundedCircle fluid />
                            </div>
                            <p className="text-center fs-4 title">Діана Якимчук</p>
                        </Col>
                        <Col className="d-flex flex-column">
                            <div className="d-flex justify-content-center align-items-center">
                                <Image className="mb-2 h-75" src={person4} roundedCircle fluid />
                            </div>
                            <p className="text-center fs-4 title">Петро Назаров</p>
                        </Col>
                        <Col className="d-flex flex-column">
                            <div className="d-flex justify-content-center align-items-center">
                                <Image className="mb-2 h-75" src={person5} roundedCircle fluid />
                            </div>
                            <p className="text-center fs-4 title">Павло Петренко</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="color-back-green">
                <Container className="py-5">
                    <h2 className="text-center py-5 title title__h2">
                        Що кажуть клієнти
                    </h2>
                    <Row xs={1} md={2} lg={4}>
                        <Col>
                            <Card className="border-0">
                                <Card.Body className="color-back-green">
                                    <Card.Text className="fst-italic">
                                        "Я дуже вдячна сайту Bookinist за можливість поринути в своє діло з головою! Оскільки я колекціоную старовинні книжки, тут я змогла знайти все, що мені потрібно. Дякую продавцям за надані екземпляри!"
                                    </Card.Text>
                                    <Card.Title className="fst-italic">Ганна</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="border-0">
                                <Card.Body className="color-back-green">
                                    <Card.Text className="fst-italic">
                                        "Завжди вчасно отримував потрібний товар, рекомендую даний сервіс усім охочим! Давно шукав, що почитати, та не помилився з вибором."
                                    </Card.Text>
                                    <Card.Title className="fst-italic">Олексій</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="border-0">
                                <Card.Body className="color-back-green">
                                    <Card.Text className="fst-italic">
                                        "Я дуже вдячна сайту Bookinist за можливість поринути в своє діло з головою! Оскільки я колекціоную старовинні книжки, тут я змогла знайти все, що мені потрібно. Дякую продавцям за надані екземпляри!"
                                    </Card.Text>
                                    <Card.Title className="fst-italic">Марія</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="border-0">
                                <Card.Body className="color-back-green">
                                    <Card.Text className="fst-italic">
                                        "Я дуже вдячна сайту Bookinist за можливість поринути в своє діло з головою! Оскільки я колекціоную старовинні книжки, тут я змогла знайти все, що мені потрібно. Дякую продавцям за надані екземпляри!"
                                    </Card.Text>
                                    <Card.Title className="fst-italic">Генадій</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container className="my-5 py-5">
                <h2 className="text-center pb-5 mb-5 title title__h2">Книжковий блог</h2>
                <Row xs={1} md={2} className="g-md-5">
                    <Col>
                        <Card className="flex-lg-row flex-column border-0">
                            <Card.Img src={blog} className="rounded-0" />
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <Card.Title className="fs-3 title">Найпопулярніші книжки року</Card.Title>
                                <Card.Text>
                                    Надія Іванчук
                                </Card.Text>
                                <Link className="text-decoration-none text-black d-flex flex-row" to="/blog">
                                    <p>Читати</p>
                                    <i className="bi bi-arrow-right mx-2"></i>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="flex-lg-row flex-column border-0">
                            <Card.Img src={blog} className="rounded-0" />
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <Card.Title className="fs-3 title">Найпопулярніші книжки року</Card.Title>
                                <Card.Text>
                                    Надія Іванчук
                                </Card.Text>
                                <Link className="text-decoration-none text-black d-flex flex-row" to="/blog">
                                    <p>Читати</p>
                                    <i className="bi bi-arrow-right mx-2"></i>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="flex-lg-row flex-column border-0">
                            <Card.Img src={blog} className="rounded-0" />
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <Card.Title className="fs-3 title">Найпопулярніші книжки року</Card.Title>
                                <Card.Text>
                                    Надія Іванчук
                                </Card.Text>
                                <Link className="text-decoration-none text-black d-flex flex-row" to="/blog">
                                    <p>Читати</p>
                                    <i className="bi bi-arrow-right mx-2"></i>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="flex-lg-row flex-column border-0">
                            <Card.Img src={blog} className="rounded-0" />
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <Card.Title className="fs-3 title">Найпопулярніші книжки року</Card.Title>
                                <Card.Text>
                                    Надія Іванчук
                                </Card.Text>
                                <Link className="text-decoration-none text-black d-flex flex-row" to="/blog">
                                    <p>Читати</p>
                                    <i className="bi bi-arrow-right mx-2"></i>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center mt-5">
                        <Button as={Link} variant="outline-secondary rounded-0 px-5 py-2 fs-4 fw-light">Бiльше</Button>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="color-back-green">
                <Container className="py-5">
                    <h2 className="py-5 title title__h2">Хочете дізнатися більше?</h2>
                    <Row xs={1} md={2}>
                        <Col>
                            <p className="fs-5">Підпишіться на нашу розсилку та слідкуйте за останніми новинами, товарами й ексклюзивними пропозиціями. Дізнайтеся першими про популярні новинки світу книжок, отримуйте повідомлення про статус заказів та багато іншого. Долучайтеся!</p>
                        </Col>
                        <Col>
                            <div className="d-flex mb-2">
                                <input type="email" className="input-join" placeholder="name@email.ua" />
                                <button type="button" className="btn btn-outline-success rounded-0 mx-2 px-4">Join</button>
                            </div>
                            <div className="d-inline-flex">
                                <input className="form-check-input me-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
                                <p>Ми серйозно ставимося до вашої конфіденційності та зобов'язуємося захищати вашу особисту інформацію. При підписці на нашу розсилку ви даєте згоду отримувати від нас періодичні електронні листи про новини нашого сайту, рекламні акції та іншу інформацію, пов'язану з букінистикою.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container className="py-5">
                <h2 className="text-center py-5 title title__h2">Ми гарантуємо:</h2>
                <Row xs={1} md={4} className="py-5">
                    <Col className="text-center">
                        <h3 className="m-0 fw-light">Перевірені статті</h3>
                        <h5 className="my-3">Авторські, оригінальні</h5>
                        <i style={{ color: "black", fontSize: "3rem" }} className="bi bi-book"></i>
                    </Col>
                    <Col className="text-center">
                        <h3 className="m-0 fw-light">Комфортну середу</h3>
                        <h5 className="my-3">Безпека й повага</h5>
                        <i style={{ color: "black", fontSize: "3rem" }} className="bi bi-check-circle"></i>
                    </Col>
                    <Col className="text-center">
                        <h3 className="m-0 fw-light">Зворотній зв'язок</h3>
                        <h5 className="my-3">Напишіть нам!</h5>
                        <i style={{ color: "black", fontSize: "3rem" }} className="bi bi-chat"></i>
                    </Col>
                    <Col className="text-center">
                        <h3 className="m-0 fw-light">Швидке отримання</h3>
                        <h5 className="my-3">Своєчасно та легко</h5>
                        <i style={{ color: "black", fontSize: "3rem" }} className="bi bi-box-seam"></i>
                    </Col>
                </Row>
            </Container>
            <FooterLayout />
        </div>
    )
}