import { useState, useContext } from "react";
import axios from 'axios';
import { Global } from "./GlobalContext";

function Login() {

    const [userName, setUserName] = useState(null);
    const [error, setError] = useState(null);
    const [name, setName] = useState('');
    const [psw, setPsw] = useState('');

    const { setLogged, setAuthName, setRoute } = useContext(Global);

    const login = e => {
        e.preventDefault();
        axios.post('http://localhost:3003/login', { name, psw }, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                if (res.data.status === 'ok') {
                    setUserName(res.data.name);
                    setName('');
                    setPsw('');
                    setError(null);
                    setRoute('accounts');
                    setLogged(true);
                    setAuthName(res.data.name);
                } else {
                    setError(true);
                    setUserName(null);
                }
            });
    }

    return (
        <div className="container mx-auto flex w-60 flex-col items-center justify-between p-4 rounded-xl shadow-md gap-y-4">
            <p className="text-xl mb-3 md:mb-0">
                {
                    error ? <span style={{ color: 'crimson' }}>Login Error</span> : <span>Login</span>
                }
            </p>
            <p className="text-xl mb-3">
                {
                    userName ? <span>Hello, {userName}!</span> : <span>Hello, quest! </span>
                }
            </p>
            <div className="flex flex-col items-center justify-between gap-y-2 md:gap-x-4">
                <label className="relative block">
                    <input
                        className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        type="text"
                        placeholder="Your Name..."
                        value={name}
                        onChange={e => setName(e.target.value)} />
                </label>
                <label className="relative block2">
                    <input
                        className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-2 pr-3 max-w-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        type="password"
                        placeholder="Your Password..."
                        value={psw}
                        onChange={e => setPsw(e.target.value)} />
                </label>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={login}>
                    Login
                </button>
            </div>
        </div >
    )
}

export default Login;