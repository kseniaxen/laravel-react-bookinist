import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from '../contexts/ContextProvider';

export default function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();

    const { setUser, setToken } = useStateContext();
    const [errors, setErrors] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault()

        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        setErrors(null);

        axiosClient.post('/login', payload)
            .then(({ data }) => {
                setUser(data.user)
                setToken(data.token)
            })
            .catch((err) => {
                const response = err.response
                if (response && response.status === 422) {
                    setErrors(response.data.errors)
                    if(response.data.errors) {
                        setErrors(response.data.errors)
                    } else {
                        setErrors({
                            email:[response.data.message]
                        })
                    }
                }
            })
    }



    return (
        <form className="row col-lg-3 col-8 border rounded p-3" onSubmit={onSubmit}>
            <h2 className="text-center">Увiйти в профiль</h2>
            {
                errors && <div className="alert alert-danger" role="alert">
                    {Object.keys(errors).map(key => (
                        <p key={key} className="m-0">{errors[key][0]}</p>
                    ))}
                </div>
            }
            <input ref={emailRef} type="email" className="form-control mb-3" id="email" placeholder="Email" />
            <input ref={passwordRef} type="password" className="form-control mb-3" id="password" placeholder="Пароль" />
            <button className="btn btn-success mb-1">
                Вiйти
            </button>
            <p className="message">
                Не зареєстровані? <Link className="text-decoration-none" to="/signup">Створити аккаунт</Link>
            </p>
        </form>
    )
}