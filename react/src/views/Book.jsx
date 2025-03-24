import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../axios-client.js";

import NavigationLayout from "../components/NavigationLayout";
import FooterLayout from "../components/FooterLayout";
import { Container, Row, Col, Image, Carousel, Badge } from "react-bootstrap";

export default function Book() {
    let { id } = useParams();

    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);

    if (id) {
        useEffect(() => {
            setLoading(true);
            axiosClient.get(`/books/${id}`)
                .then(({ data }) => {
                    setLoading(false)
                    setBook(data.data)
                    console.log(data.data)
                })
                .catch(() => {
                    setLoading(false)
                })
        }, [])
    }


    return (
        <div className="d-flex flex-column min-vh-100">
            <NavigationLayout />
            <Container className="py-lg-5">
                {
                    loading ? <Row>
                        <Col className="d-flex justify-content-center">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </Col>
                    </Row>
                        : <Row>
                            <Col lg={5} className="text-center pb-4">
                                <Carousel data-bs-theme="dark">
                                    {
                                        book.image_path?.map(image => {
                                            return <Carousel.Item>
                                                <Image className="w-75" src={image} />
                                            </Carousel.Item>
                                        })
                                    }
                                </Carousel>
                            </Col>
                            <Col>
                                <div className="d-flex">
                                    <h3 className="price d-flex">
                                        {book.price} ₴
                                    </h3>
                                </div>
                                <h1 className="title">{book.author}. {book.title}</h1>
                                <Badge bg="secondary" className="fs-6">{book.genre?.name}</Badge>
                                {book.year && <h4 className="title">{book.year} рiк</h4>}
                                {book.publish && <h4 className="title">{book.publish}</h4>}
                                <p>{book.description}</p>
                                <h5 className="py-2">Мiсто: {book.city?.name}</h5>
                                <h5 className="pb-3">Продавець:</h5>
                                <div className="d-flex align-items-center">
                                    {book.image_user && <Image src={book.image_user} className="book__user_image px-3" />}
                                    <h5>{book.user}</h5>
                                </div>
                            </Col>
                        </Row>
                }
            </Container>
            <FooterLayout />
        </div>
    )
}