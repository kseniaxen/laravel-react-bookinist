import { useEffect, useState } from "react";
import axiosClient from "../axios-client";
import Resizer from "react-image-file-resizer";
import { Container, Row, Col, Image, Badge, Button, Modal } from "react-bootstrap";
import NoImage from "../assets/img/no-image.jpg";

export default function User() {
    const [user, setUser] = useState([]);
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
        console.log(files)
        if (files) {
            const file = files[0]
            if (file) {
                resizeFile(file).then((image) => {
                    if (typeof image === 'string') {
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

    return (
        <Container>
            <Row>
                {
                    !loading &&
                    <Col md={3} className="d-flex flex-column">
                        <Image src={user.image ? user.image : NoImage} className="mb-3" />
                        <div className="d-flex flex-row">
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
                                userUpdate.image && <button className="btn btn-danger my-2" onClick={deleteImage}>Удалить картинку</button>
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
            </Row>
        </Container>
    )
}