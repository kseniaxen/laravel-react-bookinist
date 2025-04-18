import { useEffect, useState } from "react";
import axiosClient from "../../axios-client";
import { Link, useLocation } from "react-router-dom";
import { Container, Table, Row, Col, Button, Nav, Image } from "react-bootstrap";
import AdminNavigationLayout from "../../components/AdminNavigationLayout";

export default function AdminOrders() {
    const [loading, setLoading] = useState(false);
    const [orders, setOrders] = useState([]);

    const location = useLocation();

    useEffect(() => {
        getOrders();
    }, [])

    const getOrders = () => {
        setLoading(true);
        axiosClient.get('/orders')
            .then(({ data }) => {
                setLoading(false);
                setOrders(data.data);
            })
            .catch(() => {
                setLoading(false)
            })
    }

    return (
        <Container className="pb-5">
            <AdminNavigationLayout />
            {
                loading ?
                    <div className="d-flex justify-content-center py-5">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    : <Row>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Покупець</th>
                                    <th>Спосіб оплати</th>
                                    <th>Замовлення</th>
                                    <th>Адрес доставки</th>
                                    <th>Отримувач</th>
                                    <th>Ціна</th>
                                    <th>Дата</th>
                                    <th>Статус</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map(order => {
                                        return <tr>
                                            <td>
                                                <p>{order.id}</p>
                                            </td>
                                            <td>
                                                <div className="d-flex flex-column">
                                                    <p>{order.buyer.name}</p>
                                                    <p>{order.buyer.email}</p>
                                                </div>
                                            </td>
                                            <td>
                                                <p>{order.payment.name}</p>
                                            </td>
                                            <td>
                                                {
                                                    order.books_order.map(book => {
                                                        return <div className="pb-2">
                                                            <div>
                                                                <p>ID: {book.id}</p>
                                                                <p>{book.title}</p>
                                                                <p>Цiна: {book.price} грн</p>
                                                            </div>
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
                                                        </div>
                                                    })
                                                }
                                            </td>
                                            <td>
                                                <p>{order.delivery}</p>
                                            </td>
                                            <td>
                                                <p>{order.receiver_name}</p>
                                            </td>
                                            <td>
                                                <p>{order.price}</p>
                                            </td>
                                            <td>
                                                <p>{order.created}</p>
                                            </td>
                                            <td>
                                                <p>{order.status.name}</p>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </Table>
                    </Row>
            }
        </Container>
    )
}