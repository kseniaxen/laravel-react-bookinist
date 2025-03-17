import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import NavigationLayout from "../components/NavigationLayout";
import FooterLayout from "../components/FooterLayout";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import axiosClient from "../axios-client.js";

import NoImage from "../assets/img/temp_book.jpg";

export default function Catalog() {

    const [loading, setLoading] = useState(false);
    const [books, setBooks] = useState([]);
    const [pagination, setPagination] = useState({});

    useEffect(() => {
        getBooks();
    }, [])

    const getBooks = (pageNumber = 1) => {
        setLoading(true)
        axiosClient.get(`/books?page=${pageNumber}`)
            .then(({ data }) => {
                setLoading(false)
                setBooks(data.data)
                setPagination(data.meta)
                console.log(data.data)
            })
            .catch(() => {
                setLoading(false)
            })
    }

    return (
        <div className="d-flex flex-column min-vh-100">
            <NavigationLayout />
            <Container>
                <Row>
                    <Col>
                        <h1 className="title text-center title__h2 py-5">
                            Каталог
                        </h1>
                    </Col>
                </Row>
                {loading ? <div className="d-flex justify-content-center py-5">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div> :
                    <Row xs={1} md={2} lg={4}>
                        {books.map(book => {
                            return <Col className="pb-5">
                                <Card className="book h-100">
                                    <div className="d-flex justify-content-center">
                                        <Card.Img variant="top" className="w-50" src={book.image_path[0]} />
                                    </div>
                                    <Card.Body className="d-flex flex-column justify-content-end">
                                        <Card.Title className="d-flex">
                                            <h3 className="price">
                                                {book.price} ₴
                                            </h3>
                                        </Card.Title>
                                        <Card.Text className="book__title">
                                            {book.year && <h5 className="title">{book.year} рiк</h5>}
                                            <p className="text-center title fs-5">{book.author}.{book.title}</p>
                                        </Card.Text>
                                        <Link className="book__link" to={'/books/' + book.id}>
                                            <Button className="w-100" variant="outline-success">
                                                Переглянути
                                            </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        })
                        }
                    </Row>
                }
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Pagination
                            activePage={pagination.current_page}
                            totalItemsCount={pagination.total}
                            itemsCountPerPage={pagination.per_page}
                            onChange={(pageNumber) => getBooks(pageNumber)}
                            itemClass="page-item"
                            linkClass="page-link"
                            firstPageText="Перша"
                            lastPageText="Остання"
                        />
                    </Col>
                </Row>
            </Container>
            <FooterLayout />
        </div>
    );
}