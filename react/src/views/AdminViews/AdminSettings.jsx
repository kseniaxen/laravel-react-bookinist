import { useEffect, useState } from "react";
import axiosClient from "../../axios-client";
import { Link, useLocation } from "react-router-dom";
import { Container, Table, Row, Col, Button, Nav } from "react-bootstrap";
import AdminNavigationLayout from "../../components/AdminNavigationLayout";

export default function AdminSettings() {
    const [user, setUser] = useState([]);
    const [cities, setCities] = useState([]);
    const [genres, setGenres] = useState([]);
    const [payments, setPayments] = useState([]);
    const [statuses, setStatuses] = useState([]);
    const [loading, setLoading] = useState(false);

    const location = useLocation();

    useEffect(() => {
        getUser();
        getCities();
        getGenres();
        getPayments();
        getStatuses();
    }, [])

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

    const getCities = () => {
        setLoading(true);
        axiosClient.get(`/cities`)
            .then(({ data }) => {
                setLoading(false);
                setCities(data.data);
            })
            .catch(() => {
                setLoading(false);
            })
    }

    const getGenres = () => {
        setLoading(true);
        axiosClient.get(`/genres`)
            .then(({ data }) => {
                setLoading(false);
                setGenres(data.data);
            })
            .catch(() => {
                setLoading(false);
            })
    }

    const getPayments = () => {
        setLoading(true);
        axiosClient.get(`/payments`)
            .then(({ data }) => {
                setLoading(false);
                setPayments(data.data);
            })
            .catch(() => {
                setLoading(false);
            })
    }

    const getStatuses = () => {
        setLoading(true);
        axiosClient.get(`/statuses`)
            .then(({ data }) => {
                setLoading(false);
                setStatuses(data.data);
            })
            .catch(() => {
                setLoading(false);
            })
    }

    const onDeleteClickCity = city => {
        if (!window.confirm("Ви точно хочете видалити мiсто?")) {
            return
        }
        axiosClient.delete(`/cities/${city.id}`)
            .then(() => {
                getCities();
            })
    }

    const onDeleteClickGenre = genre => {
        if (!window.confirm("Ви точно хочете видалити жанр?")) {
            return
        }
        axiosClient.delete(`/genres/${genre.id}`)
            .then(() => {
                getGenres();
            })
    }

    const onDeleteClickPayment = payment => {
        if (!window.confirm("Ви точно хочете видалити спосiб оплати?")) {
            return
        }
        axiosClient.delete(`/payments/${payment.id}`)
            .then(() => {
                getPayments();
            })
    }

    const onDeleteClickStatus = status => {
        if (!window.confirm("Ви точно хочете видалити статус замовлення?")) {
            return
        }
        axiosClient.delete(`/statuses/${status.id}`)
            .then(() => {
                getStatuses();
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
                    : <Row className="d-inline">
                        <Col>
                            <h2>Мiста</h2>
                            <Link to="/admin/cities/new">
                                <Button variant="primary" className="mb-2">
                                    Нове місто
                                </Button>
                            </Link>
                            <Table bordered hover responsive="md">
                                <thead>
                                    <tr>
                                        <th>№</th>
                                        <th>Мiсто</th>
                                        <th>Дія</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cities.map(city => {
                                            return <tr>
                                                <td>
                                                    {city.id}
                                                </td>
                                                <td>
                                                    {city.name}
                                                </td>
                                                <td>
                                                    <div className="mb-2">
                                                        <Link to={'/admin/cities/edit/' + city.id}>
                                                            <Button variant="warning" className="w-100">
                                                                Змінити
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <Button variant="danger" className="w-100" onClick={ev => onDeleteClickCity(city)}>Видалити</Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </Table>
                        </Col>
                        <Col>
                            <h2>Жанри</h2>
                            <Link to="/admin/genres/new">
                                <Button variant="primary" className="mb-2">
                                    Новий жанр
                                </Button>
                            </Link>
                            <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                                <Table bordered hover responsive="md">
                                    <thead>
                                        <tr>
                                            <th>№</th>
                                            <th>Жанр</th>
                                            <th>Дія</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            genres.map(genre => {
                                                return <tr>
                                                    <td>
                                                        {genre.id}
                                                    </td>
                                                    <td>
                                                        {genre.name}
                                                    </td>
                                                    <td>
                                                        <div className="mb-2">
                                                            <Link to={'/admin/genres/edit/' + genre.id}>
                                                                <Button variant="warning" className="w-100">
                                                                    Змінити
                                                                </Button>
                                                            </Link>
                                                        </div>
                                                        <div>
                                                            <Button variant="danger" className="w-100" onClick={ev => onDeleteClickGenre(genre)}>Видалити</Button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                        <Col>
                            <h2>Вибір оплати</h2>
                            <Link to="/admin/payments/new">
                                <Button variant="primary" className="mb-2">
                                    Новий вибiр оплати
                                </Button>
                            </Link>
                            <Table bordered hover responsive="md">
                                <thead>
                                    <tr>
                                        <th>№</th>
                                        <th>Вибір оплати</th>
                                        <th>Дія</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        payments.map(payment => {
                                            return <tr>
                                                <td>
                                                    {payment.id}
                                                </td>
                                                <td>
                                                    {payment.name}
                                                </td>
                                                <td>
                                                    <div className="mb-2">
                                                        <Link to={'/admin/payments/edit/' + payment.id}>
                                                            <Button variant="warning" className="w-100">
                                                                Змінити
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <Button variant="danger" className="w-100" onClick={ev => onDeleteClickPayment(payment)}>Видалити</Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </Table>
                        </Col>
                        <Col>
                            <h2>Статус замовлення</h2>
                            <Link to="/admin/statuses/new">
                                <Button variant="primary" className="mb-2">
                                    Новий cтатус замовлення
                                </Button>
                            </Link>
                            <Table bordered hover responsive="md">
                                <thead>
                                    <tr>
                                        <th>№</th>
                                        <th>Статус замовлення</th>
                                        <th>Дія</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        statuses.map(status => {
                                            return <tr>
                                                <td>
                                                    {status.id}
                                                </td>
                                                <td>
                                                    {status.name}
                                                </td>
                                                <td>
                                                    <div className="mb-2">
                                                        <Link to={'/admin/statuses/edit/' + status.id}>
                                                            <Button variant="warning" className="w-100">
                                                                Змінити
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <Button variant="danger" className="w-100" onClick={ev => onDeleteClickStatus(status)}>Видалити</Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

            }
        </Container>
    )
}