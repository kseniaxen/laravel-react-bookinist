import { useRef } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from '../contexts/ContextProvider';

export default function Signup() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const {setUser, setToken} = useStateContext()

    const onSubmit = (e) => {
        e.preventDefault()
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }

        axiosClient.post('/signup', payload)
        .then(({data}) => {
            setUser(data.user)
            setToken(data.token)
        })
        .catch((err) => {
            const response = err.response
            if(response && response === 422){
                console.log(response.data.errors)
            }
        })
    }

    return (
        <form className="row col-lg-3 col-8 border rounded p-3" onSubmit={onSubmit}>
            <h2 className="text-center">Створення нового аккаунту</h2>
            <input ref={nameRef} type="text" className="form-control mb-3" id="name" placeholder="Повне ім'я" required />
            <input ref={emailRef} type="email" className="form-control mb-3" id="email" placeholder="Email" required />
            <input ref={passwordRef} type="password" className="form-control mb-3" id="password" placeholder="Пароль" required />
            <input ref={passwordConfirmationRef} type="password" className="form-control mb-3" id="password_confirmation" placeholder="Підтвердіть пароль" required />
            <button className="btn btn-success mb-1">
                Зареєструватись
            </button>
            <p className="message">
                Вже зареєстровані? <Link to="/login">Увiйти в аккаунт</Link>
            </p>
        </form>
    )
}