import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../axios-client.js";
import { Container } from "react-bootstrap";

export default function PaymentFormAdd() {
    const navigate = useNavigate();
    const [payment, setPayment] = useState([])
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState(null)

    const onSubmit = (ev) => {
        ev.preventDefault();

        axiosClient.post('/payments', payment)
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
            <h1>Новий споciб оплати</h1>
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
                        <input type="text" value={payment.title} onChange={ev => setPayment({ ...payment, name: ev.target.value })} className="form-control mb-3" placeholder="Назва способу оплати" />
                        <button className="btn btn-success mb-1">
                            Додати
                        </button>
                    </form>
                )
            }
        </Container>
    );

}