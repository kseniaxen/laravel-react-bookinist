import NavigationLayout from "../components/NavigationLayout";
import FooterLayout from "../components/FooterLayout";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Cart() {

    return (
        <div className="d-flex flex-column min-vh-100">
            <NavigationLayout />
            <Container className="py-5">
                <Row>
                    <h1>Кошик</h1>
                    <Col sm={8}>
                        <div className="bg-cart">
                            <h4 className="bg-cart bg-cart-title">Доступні для замовлення</h4>
                            <Table>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                    <Col>
                        <Link className="book__link" to={''}>
                            <Button className="w-100 cart-button" variant="success">
                                Перейти до оформлення
                            </Button>
                        </Link>
                        <p className="py-3">Доступні способи і час доставки можна вибрати при оформленні замовлення</p>
                        <div>
                            <h4 className="pb-3">
                                Ваш кошик
                            </h4>
                            <div className="d-flex justify-content-between my-2">
                                <p className="fw-normal m-0">Товар (1)</p>
                                <p className="fw-bold m-0">1000 грн</p>
                            </div>
                            <hr/>
                            <div className="d-flex justify-content-between my-2">
                                <h5 className="fw-bold m-0">До оплати</h5>
                                <p className="fw-bold m-0 fs-5 cart-price">1000 грн</p>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
            <FooterLayout />
        </div>
    );
}