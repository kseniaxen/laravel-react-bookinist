import { useEffect, useState } from "react";
import axiosClient from "../axios-client";
import { Link } from "react-router-dom";
import { Container, Table, Row, Col, Button } from "react-bootstrap";

export default function Admin() {
    const [user, setUser] = useState([]);
    const [cities, setCities] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getUser();
        getCities();
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

    const onDeleteClickCity = city => {
        if (!window.confirm("Ви точно хочете видалити мiсто?")) {
            return
        }
        axiosClient.delete(`/cities/${city.id}`)
            .then(() => {
                getCities();
            })
    }

    return (
        <Container className="pb-5">
            {
                loading ?
                    <div className="d-flex justify-content-center py-5">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    : <Row>
                        <Col>
                            <h1>Мiста</h1>
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
                    </Row>
            }
        </Container>
    )
}