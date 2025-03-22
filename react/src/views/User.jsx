import { useEffect, useState } from "react";
import axiosClient from "../axios-client";
import { Link } from "react-router-dom";
import Resizer from "react-image-file-resizer";
import { Container, Row, Col, Image, Badge, Button, Modal, Nav, Table } from "react-bootstrap";
import NoImage from "../assets/img/no-image.jpg";

export default function User() {
    const [user, setUser] = useState([]);
    const [userBooks, setUserBooks] = useState([]);
    const [userUpdate, setUserUpdate] = useState(
        {
            id: null,
            name: '',
            email: '',
            image: '',
            password: '',
            password_confirmation: ''
        }
    );
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    const [showUpdateModal, setShowUpdateModal] = useState(false);

    const handleClose = () => setShowUpdateModal(false);
    const handleShow = () => {
        setUserUpdate({
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
            password: '',
            password_confirmation: ''
        });
        setShowUpdateModal(true);
    }

    useEffect(() => {
        getUser();
        getUserBooks();
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

    const getUserBooks = () => {
        setLoading(true);
        axiosClient.get('/books/auth')
            .then(({ data }) => {
                setLoading(false);
                setUserBooks(data.data);
            })
            .catch(() => {
                setLoading(false)
            })
    }

    const changeDate = (date) => {
        return new Date(date).toLocaleDateString("ru");
    }

    const resizeFile = (file) => new Promise(resolve => {
        Resizer.imageFileResizer(file, 500, 500, 'JPEG', 100, 0,
            uri => {
                resolve(uri);
            },
            'base64'
        )
    })

    const changeImage = (ev) => {
        const files = ev.currentTarget.files;
        if (files) {
            const file = files[0]
            if (file) {
                resizeFile(file).then((image) => {
                    if (typeof image === 'string') {
                        console.log(image)
                        setUserUpdate({ ...userUpdate, image: image });
                    }
                })
            }
        }
    }

    const onSubmit = (ev) => {
        ev.preventDefault();
        axiosClient.put(`/user/${userUpdate.id}`, userUpdate)
            .then((data) => {
                getUser(data);
                setUserUpdate({});
                handleClose();
            })
            .catch(err => {
                const response = err.response
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                }
            })
    }

    const deleteImage = () => {
        setUserUpdate({ ...userUpdate, image: "" });
    }

    const onDeleteClick = book => {
        if (!window.confirm("Ви точно хочете видалити товар?")) {
            return
        }
        axiosClient.delete(`/books/${book.id}`)
            .then(() => {
                getUserBooks();
            })
    }

    return (
        <Container className="pb-5">
            {
                loading ?
                    <Row className="d-flex justify-content-center py-5">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </Row>
                    : <Row>
                        <Col lg={3} className="d-flex flex-column">
                            <Image src={user.image ? user.image : NoImage} className="mb-3" />
                            <div className="d-flex flex-row justify-content-between">
                                <h2>{user.name}</h2>
                                <div className="d-flex flex-column mb-3">
                                    <Badge bg="primary d-flex align-items-center">
                                        <p className="m-0">
                                            {changeDate(user.created_at)}
                                        </p>
                                    </Badge>
                                </div>
                            </div>
                            <h5>{user.email}</h5>
                            <Button variant="success" onClick={handleShow}>Змінити профіль</Button>
                        </Col>
                        <Col>
                            <Nav variant="underline" className="pb-2">
                                <Nav.Item>
                                    <Nav.Link active>Мої товари</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Link to="/books/new">
                                <Button variant="primary" className="mb-2">
                                    Новий товар
                                </Button>
                            </Link>
                            <Table bordered hover responsive="md">
                                <thead>
                                    <tr>
                                        <th>Зображення</th>
                                        <th>Автор</th>
                                        <th>Назва</th>
                                        <th>Ціна</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        userBooks.map(book => {
                                            return <tr>
                                                <td><Image variant="top" className="w-50" src={book.image_path[0]} /></td>
                                                <td>{book.author}</td>
                                                <td>{book.title}</td>
                                                <td>{book.price}</td>
                                                <td>
                                                    <div className="mb-2">
                                                        <Link to={'/books/edit/' + book.id}>
                                                            <Button variant="warning" className="w-100">
                                                                Змінити
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <Button variant="danger" className="w-100" onClick={ev => onDeleteClick(book)}>Видалити</Button>
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
            <Modal show={showUpdateModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Змінити профіль</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        errors && <div className="alert alert-danger" role="alert">
                            {Object.keys(errors).map(key => (
                                <p key={key} className="m-0">{errors[key][0]}</p>
                            ))}
                        </div>
                    }
                    <div className="d-flex flex-column">
                        <Image src={userUpdate.image} className="img-fluid"></Image>
                        {
                            userUpdate.image && <button className="btn btn-danger my-2" onClick={deleteImage}>Видалити картинку</button>
                        }
                    </div>
                    <form onSubmit={onSubmit}>
                        {
                            !userUpdate.image &&
                            <div className="input-group mb-3">
                                <input type="file" src={userUpdate.image} onChange={ev => changeImage(ev)} accept="image/png, image/jpeg, image/png" class="form-control" id="inputGroupFile" />
                            </div>
                        }
                        <input type="text" value={userUpdate.name} onChange={ev => setUserUpdate({ ...userUpdate, name: ev.target.value })} className="form-control mb-3" placeholder="Ваше ім'я" />
                        <input type="email" value={userUpdate.email} onChange={ev => setUserUpdate({ ...userUpdate, email: ev.target.value })} className="form-control mb-3" placeholder="Email" />
                        <input type="password" onChange={ev => setUserUpdate({ ...userUpdate, password: ev.target.value })} className="form-control mb-3" placeholder="Пароль" />
                        <input type="password" onChange={ev => setUserUpdate({ ...userUpdate, password_confirmation: ev.target.value })} className="form-control mb-3" placeholder="Підтвердіть пароль" />
                        <button className="btn btn-success mb-1">Зберегти зміни</button>
                    </form>
                </Modal.Body>
            </Modal>
        </Container>
    )
}