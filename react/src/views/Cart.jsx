import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../axios-client";
import NavigationLayout from "../components/NavigationLayout";
import FooterLayout from "../components/FooterLayout";
import { Container, Row, Col, Button, Table, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteFromCart, getCart, getAmountCart } from "../cart-storage.js";
import { useCartCount } from '../hooks/useCartCount';

export default function Cart() {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const [price, setPrice] = useState();
    const [loading, setLoading] = useState(false);
    const cartCount = useCartCount();

    useEffect(() => {
        getBooks();
    }, [])

    if(cartCount === 0) {
        navigate('/catalog')
    }

    const priceFull = (array) => array.reduce((sum, item) => sum + Number(item.price), 0).toFixed(2);

    useEffect(() => {
        getBooks();
        setPrice(priceFull(books));
    }, [cartCount]);

    const getBooks = () => {
        let stringArray = getCart().join();
        const data = {
            id: stringArray
        };
        setLoading(true);
        axiosClient.post(`/cart`, data)
            .then(({ data }) => {
                setLoading(false)
                setBooks(data.data)
                setPrice(priceFull(data.data));
            })
            .catch(() => {
                setLoading(false)
            })
    }

    const onDeleteFromCart = (id) => {
        deleteFromCart(id)
    }

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
                                    {
                                        books.map(book => {
                                            return <tr className="d-flex">
                                                <td className="col-3">
                                                    <div>
                                                        <Image className="w-25" src={book.image_path[0]} />
                                                    </div>
                                                </td>
                                                <td className="col-5 d-flex justify-content-between align-items-center">{book.title}</td>
                                                <td className="col-2 d-flex justify-content-between align-items-center">{book.price} грн</td>
                                                <td className="col-2 d-flex justify-content-between align-items-center">
                                                    <Button className="" variant="success" onClick={ev => onDeleteFromCart(book.id)}>
                                                        <i className="bi bi-trash"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                        })
                                    }
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
                                <p className="fw-normal m-0">Товар ({getAmountCart()})</p>
                                <p className="fw-bold m-0">{price}</p>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between my-2">
                                <h5 className="fw-bold m-0">До оплати</h5>
                                <p className="fw-bold m-0 fs-5 cart-price">{price} грн</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <FooterLayout />
        </div>
    );
}