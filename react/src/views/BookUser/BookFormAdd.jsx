import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../axios-client.js";
import { Container, Col, Row } from "react-bootstrap";

export default function BookFormAdd() {
    const navigate = useNavigate();
    const [book, setBook] = useState({})
    const [cities, setCities] = useState([])
    const [genres, setGenres] = useState([])
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        setLoading(true);
        axiosClient.get('/user')
            .then(({ data }) => {
                setLoading(false);
                setBook({ ...book, userId: data.data.id });
            })
    }, []);

    useEffect(() => {
        setLoading(true);
        axiosClient.get(`/cities`)
            .then(({ data }) => {
                setLoading(false);
                setCities(data.data);
            })
            .catch(() => {
                setLoading(false);
            })
    }, [])

    useEffect(() => {
        setLoading(true);
        axiosClient.get(`/genres`)
            .then(({ data }) => {
                setLoading(false);
                setGenres(data.data);
            })
            .catch(() => {
                setLoading(false);
            })
    }, [])

    const addImages = (ev) => {
        const images = ev.currentTarget.files
        const array = Array.from(images);
        setBook({ ...book, 'image_path[]': array });
    }

    const onSubmit = (ev) => {
        ev.preventDefault();
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        axiosClient.post('/books', book, config)
            .then(() => {
                navigate('/user')
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors)
                }
            })
    }

    return (
        <Container>
            <h1>Новий товар</h1>
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
                !loading && (
                    <form onSubmit={onSubmit} className="pb-5" encType="multipart/form-data">
                        <input type="text" value={book.title} onChange={ev => setBook({ ...book, title: ev.target.value })} className="form-control mb-3" placeholder="Назва книги" />
                        <input type="text" value={book.author} onChange={ev => setBook({ ...book, author: ev.target.value })} className="form-control mb-3" placeholder="Автор" />
                        <Row className="d-flex flex-md-row flex-column">
                            <Col>
                                <input type="number" value={book.year} onChange={ev => setBook({ ...book, year: ev.target.value })} className="form-control mb-3" placeholder="Рiк" />
                            </Col>
                            <Col>
                                <select className="form-select mb-3" onChange={ev => setBook({ ...book, cityId: ev.target.value })}>
                                    <option selected disabled>Виберіть місто</option>
                                    {
                                        cities.map((city) => {
                                            return <option key={city.id} value={city.id}>{city.name}</option>
                                        })
                                    }
                                </select>
                            </Col>
                            <Col>
                                <select className="form-select mb-3" onChange={ev => setBook({ ...book, genreId: ev.target.value })}>
                                    <option selected disabled>Виберіть жанр</option>
                                    {
                                        genres.map((genre) => {
                                            return <option key={genre.id} value={genre.id}>{genre.name}</option>
                                        })
                                    }
                                </select>
                            </Col>
                        </Row>
                        <div class="form-floating mb-3">
                            <textarea className="form-control" value={book.description} onChange={ev => setBook({ ...book, description: ev.target.value })} placeholder="Додаткова інформація" id="floatInfo" style={{ height: "100px", maxHeight: "100px" }}></textarea>
                            <label htmlFor="floatInfo">Додаткова інформація</label>
                        </div>
                        <input type="text" value={book.publish} onChange={ev => setBook({ ...book, publish: ev.target.value })} className="form-control mb-3" placeholder="Видавництво" />
                        <input type="number" min="1" step="0.01" value={book.price} onChange={ev => setBook({ ...book, price: ev.target.value })} className="form-control mb-3" placeholder="Цiна" /><Row>
                            <Col>
                                <div className="input-group mb-3">
                                    <input type="file" name='file[]' onChange={ev => addImages(ev)} accept="image/png, image/jpeg, image/png" className="form-control" id="inputGroupFile" multiple />
                                </div>
                            </Col>
                        </Row>
                        <button className="btn btn-success mb-1">
                            Додати
                        </button>
                    </form>
                )
            }
        </Container>
    );
}