import { useEffect, useState, useRef } from "react";
import InputMask from 'react-input-mask';
import { Navigate } from "react-router-dom";
import NavigationLayout from "../components/NavigationLayout";
import FooterLayout from "../components/FooterLayout";
import axiosClient from "../axios-client";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { useStateContext } from "../contexts/ContextProvider";
import { getCart, getAmountCart } from "../cart-storage.js";

export default function Purchase() {
    const { user, token, setUser, setToken } = useStateContext();
    const [loading, setLoading] = useState(false);
    const [price, setPrice] = useState();
    const [books, setBooks] = useState([]);
    const [receiver, setReceiver] = useState('');
    const paymentRef = useRef();
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState(null);
    const [errors, setErrors] = useState(null)

    if (!token) {
        return <Navigate to="/login" />
    }

    const priceFull = (array) => array.reduce((sum, item) => sum + Number(item.price), 0).toFixed(2);

    useEffect(() => {
        getUser();
        getBooks();
        setPrice(priceFull(books));
    }, [])

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

    const getUser = () => {
        setLoading(true);
        axiosClient.get('/user')
            .then(({ data }) => {
                setLoading(false);
                setUser(data.data);
            })
            .catch(() => {
                setLoading(false)
            })
    }

    const onSubmit = (ev) => {
        ev.preventDefault();
        const phoneNumber = phone?.replaceAll(' ', '');
        const selectedValue = new FormData(ev.target).get("payment1");
        const order = {
            'buyerId': user.id,
            'paymentId': selectedValue,
            'books_order': getCart(),
            'delivery': address,
            'receiver_name': receiver,
            'number_phone': phoneNumber,
            'price': price
        }
        axiosClient.post(`/orders`, order)
            .then((data) => {

            })
            .catch(err => {
                const response = err.response
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                }
            })
    }

    return (
        <div className="d-flex flex-column min-vh-100">
            <NavigationLayout />
            <Container className="py-5">
                <h3>
                    Оформлення замовлення
                </h3>
                {
                    loading &&
                    <div className="d-flex justify-content-center py-5">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }
                {
                    errors && <div className="alert alert-danger" role="alert">
                        {Object.keys(errors).map(key => (
                            <p key={key} className="m-0">{errors[key][0]}</p>
                        ))}
                    </div>
                }
                {
                    !loading &&
                    <form onSubmit={onSubmit}>
                        <Row>
                            <Col sm={8} className="bg-cart">
                                <div className="bg-cart bg-cart-title mb-3">
                                    <h5>Спосіб оплати</h5>
                                </div>
                                <Form.Check
                                    inline
                                    label="Оплата карткою"
                                    name="payment1"
                                    type="radio"
                                    id="inline-radio-1"
                                    value="1"
                                    ref={paymentRef}
                                />
                                <Form.Check
                                    inline
                                    label="Після отримання"
                                    name="payment1"
                                    type="radio"
                                    id="inline-radio-2"
                                    value="2"
                                />
                                <div className="bg-cart bg-cart-title my-3">
                                    <h5>Спосіб отримання</h5>
                                </div>
                                <Form.Control
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    type="text"
                                    placeholder="Напишіть повністю адресу доставки або пункт видачі" />
                                <div className="bg-cart bg-cart-title my-3">
                                    <h5>Одержувач</h5>
                                </div>
                                <Form.Control
                                    value={receiver}
                                    onChange={(e) => setReceiver(e.target.value)}
                                    type="text"
                                    placeholder="Напишіть повністю прізвище ім'я по батькові" />
                                <div className="bg-cart bg-cart-title my-3">
                                    <h5>Номер телефона</h5>
                                </div>
                                <InputMask
                                    mask="+380 99 999 99 99"
                                    placeholder="+380 __ ___ __ __"
                                    className="form-control"
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                <div className="bg-cart bg-cart-title my-3">
                                    <p className="fw-normal mb-3">Товар ({getAmountCart()})</p>
                                    <div className="d-flex ">
                                        {
                                            books.map(book => {
                                                return <div>
                                                    <div className="ratio ratio-1x1" style={{ width: '150px', height: "200px" }}>
                                                        <Image
                                                            className="img-fluid"
                                                            src={book.image_path[0]}
                                                            style={{
                                                                maxWidth: "100%",
                                                                maxHeight: "100%",
                                                                objectFit: "contain"
                                                            }}
                                                            alt={book.title}
                                                        />
                                                    </div>
                                                    <p className="fw-medium text-center">
                                                        {book.price} ₴
                                                    </p>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <Button className="w-100 cart-button" variant="success" type="submit">
                                    Оплатити
                                </Button>
                                <p className="py-3">Натискаючи на кнопку, ви погоджуєтеся з умовами обробки персональних даних, а також з умовами продажу</p>
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
                    </form>
                }
            </Container >
            <FooterLayout />
        </div >
    )
}