import { Link } from "react-router-dom";

export default function Login() {

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form className="row col-lg-3 col-8 border rounded p-3" onSubmit={onSubmit}>
            <h2 className="text-center">Увiйти в профiль</h2>
            <input type="email" className="form-control mb-3" id="email" placeholder="Email" required />
            <input type="password" className="form-control mb-3" id="password" placeholder="Пароль" required />
            <button className="btn btn-success mb-1">
                Вiйти
            </button>
            <p className="message">
                Не зареєстровані? <Link to="/signup">Створити аккаунт</Link>
            </p>
        </form>
    )
}