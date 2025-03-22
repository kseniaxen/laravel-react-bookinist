import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../axios-client.js";
import NavigationLayout from "../../components/NavigationLayout";
import FooterLayout from "../../components/FooterLayout";
import { Container } from "react-bootstrap";

export default function CityFormAdd() {
    const navigate = useNavigate();
    const [city, setCity] = useState([])
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState(null)

    const onSubmit = (ev) => {
        ev.preventDefault();

        axiosClient.post('/cities', city)
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
            <h1>Нове місто</h1>
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
                        <input type="text" value={city.title} onChange={ev => setCity({ ...city, name: ev.target.value })} className="form-control mb-3" placeholder="Назва мiста" />
                        <button className="btn btn-success mb-1">
                            Додати
                        </button>
                    </form>
                )
            }
        </Container>
    );
}