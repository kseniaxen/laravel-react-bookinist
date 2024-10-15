import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from '../contexts/ContextProvider';

export default function Signup() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const { setUser, setToken } = useStateContext();
    const [errors, setErrors] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault()
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }

        axiosClient.post('/signup', payload)
            .then(({ data }) => {
                setUser(data.user)
                setToken(data.token)
            })
            .catch((err) => {
                const response = err.response
                if (response && response.status === 422) {
                    setErrors(response.data.errors)
                }
            })
    }

    return (
        <form className="row col-lg-3 col-8 border rounded p-3" onSubmit={onSubmit}>
            <h2 className="text-center">Створення нового аккаунту</h2>
            {
                errors && <div className="alert alert-danger" role="alert">
                    {Object.keys(errors).map(key => (
                        <p key={key} className="m-0">{errors[key][0]}</p>
                    ))}
                </div>
            }
            <input ref={nameRef} type="text" className="form-control mb-3" id="name" placeholder="Повне ім'я" />
            <input ref={emailRef} type="email" className="form-control mb-3" id="email" placeholder="Email" />
            <input ref={passwordRef} type="password" className="form-control mb-3" id="password" placeholder="Пароль" />
            <input ref={passwordConfirmationRef} type="password" className="form-control mb-3" id="password_confirmation" placeholder="Підтвердіть пароль" />
            <button className="btn btn-success mb-1">
                Зареєструватись
            </button>
            <p className="message">
                Вже зареєстровані? <Link className="text-decoration-none" to="/login">Увiйти в аккаунт</Link>
            </p>
        </form>
    )
}