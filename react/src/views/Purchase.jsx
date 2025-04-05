import NavigationLayout from "../components/NavigationLayout";
import FooterLayout from "../components/FooterLayout";
import { Container, Row, Col } from "react-bootstrap";
export default function Purchase() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <NavigationLayout />
            <Container className="py-5">
                <h3 className="bg-cart bg-cart-title">
                    Оформлення замовлення
                </h3>
                <Row className="bg-cart">
                    <Col>
                        <div className="bg-cart bg-cart-title">
                            <h5 className="">Спосіб оплати</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
            <FooterLayout />
        </div>
    )
}