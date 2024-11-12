import { Row, Container, Accordion } from "react-bootstrap";
import NavigationLayout from "../components/NavigationLayout";
import FooterLayout from "../components/FooterLayout";

export default function FAQ() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <NavigationLayout />
            <Container>
                <Row>
                    <h1 className="title text-center title__h2 py-5">
                        Часті запитання
                    </h1>
                </Row>
                <Row className="pb-5 mb-lg-5">
                    <Accordion>
                        <Accordion.Item eventKey="0" className="faq-accordion">
                            <Accordion.Header>
                                <h3 className="title fs-4">
                                    Де нас знайти?
                                </h3>
                            </Accordion.Header>
                            <Accordion.Body>
                                Ми знаходимося за адресою місто Дніпро, вул. ABCDABCDAB. Слідкуйте за оновленнями сайту.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="faq-accordion">
                            <Accordion.Header>
                                <h3 className="title fs-4">
                                    Чому саме наш сайт?
                                </h3>
                            </Accordion.Header>
                            <Accordion.Body>
                                У нас ви можете придбати найцікавіші книги, що давно не продаються у звичайних магазинах, адже вони старовинні та люди самі виставляють їх на продаж. Ви також можете виставити власний екземпляр, і з вами зв'яжуться, якщо знайдеться потенційний покупець. Аналогів мало, адже галузь букіністики ще не така популярна. Ми маємо на меті поширити цей рух.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className="faq-accordion">
                            <Accordion.Header>
                                <h3 className="title fs-4">
                                    Як дізнатися про новинки книжкового світу?
                                </h3>
                            </Accordion.Header>
                            <Accordion.Body>
                                Ми створили власний блог, отже прямо з головної сторінки сайту ви можете подивитися останні статті, пов'язані з книгами. У тому числі про нові видання, що набирають популярність. Ви також можете опублікувати власну статтю, а ми перевіримо її та викладемо, якщо вона не порушує правил.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className="faq-accordion">
                            <Accordion.Header>
                                <h3 className="title fs-4">
                                    Чому я не можу купити товар?
                                </h3>
                            </Accordion.Header>
                            <Accordion.Body>
                                Можливо, ви не увійшли до особистого кабінету користувача. На нашому сайті передбачено реєстрацію, то ж ви маєте змогу створити особистий кабінет, через який будете купляти книжки, виставляти власні на продаж, публікувати статті.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className="faq-accordion">
                            <Accordion.Header>
                                <h3 className="title fs-4">
                                    Як додати книжку до кошика?
                                </h3>
                            </Accordion.Header>
                            <Accordion.Body>
                                Переходьте до каталогу товарів, обирайте книжку, що вас цікавить. Натискайте на її назву (або кнопку "Переглянути"), і вам покажуть докладну інформацію щодо стану обкладинки, контакти автора оголошення, рік випуску та інше. Якщо все влаштовує - тисніть на іконку кошику. Перед цим переконайтеся, що зареєструвалися й увійшли до особистого кабінету.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Row>
            </Container>
            <FooterLayout />
        </div>
    )
}