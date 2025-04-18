import { useEffect, useState } from "react";
import axiosClient from "../axios-client";
import { Link, useLocation } from "react-router-dom";
import { Container, Table, Row, Col, Button, Nav } from "react-bootstrap";
import AdminNavigationLayout from "../components/AdminNavigationLayout";

export default function Admin() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);

    const location = useLocation();

    useEffect(() => {
        getUser();
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

                    </Row>
            }
        </Container>
    )
}