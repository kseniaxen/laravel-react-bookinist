import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosClient from "../../axios-client.js";
import { Container } from "react-bootstrap";

export default function StatusFormUpdate() {
    let { id } = useParams();
    const navigate = useNavigate();
    const [status, setStatus] = useState({})
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState(null)

    if (id) {
        useEffect(() => {
            setLoading(true);
            axiosClient.get(`/statuses/${id}`)
                .then(({ data }) => {
                    setLoading(false);
                    setStatus(data.data);
                })
                .catch(() => {
                    setLoading(false);
                })
        }, [])
    }

    const onSubmit = (ev) => {
        ev.preventDefault();

        axiosClient.put(`/statuses/${status.id}`, status)
            .then(() => {
                navigate('/admin')
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
            <h1>Змiнити статус замовлення</h1>
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
                    <form onSubmit={onSubmit} className="pb-5">
                        <input type="text" value={status.name} onChange={ev => setStatus({ ...status, name: ev.target.value })} className="form-control mb-3" placeholder="Назва статуса замовлення" />
                        <button className="btn btn-success mb-1">
                            Змiнити
                        </button>
                    </form>
                )
            }
        </Container>
    );
}