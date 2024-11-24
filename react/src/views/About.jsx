import NavigationLayout from "../components/NavigationLayout";
import FooterLayout from "../components/FooterLayout";
import { Col, Container, Image, Row } from "react-bootstrap";

import logoImg from "../assets/img/logo.png";

export default function About() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <NavigationLayout />
            <Container>
                <Row>
                    <Col>
                        <h1 className="title text-center title__h2 py-5">
                            Про нас
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Інтернет-магазин <span className="fw-bold">bookin1st.ua</span> – український роздрібний букіністичний інтернет-магазин, що спеціалізується на продажі видань, що вийшли з тиражу. Надаємо допомогу в пошуку книг, чи це рідкісне колекційне видання чи спеціалізована література.</p>
                        <p>Магазин був створений у 2024 році. У магазині представлені книги різних категорій:
                            <ul>
                                <li>Детективи, трилери</li>
                                <li>Біографія</li>
                                <li>Психологія</li>
                                <li>Дитячі книжки</li>
                                <li>Езотерика</li>
                                <li>Кулінарія</li>
                                <li>Освіта</li>
                                <li>Подорожі</li>
                                <li>Романи</li>
                                <li>Фантастика</li>
                                <li>Домашнє коло</li>
                                <li>Енциклопедії</li>
                                <li>Розповіді</li>
                                <li>Зібрання творів</li>
                                <li>Проза</li>
                                <li>Поезія та подарункові видання</li>
                            </ul>
                        </p>
                        <p>Замовити книгу в інтернет-магазині <span className="fw-bold">bookin1st.ua</span> можна з будь-якої точки України. Вибравши необхідні товари або послуги, користувач відразу на сайті вибирає метод оплати та доставки.</p>
                    </Col>
                    <Col md={3} className="d-flex align-items-center">
                        <Image src={logoImg} className="w-100" alt="Logo" />
                    </Col>
                </Row>
            </Container>
            <FooterLayout />
        </div>
    )
}