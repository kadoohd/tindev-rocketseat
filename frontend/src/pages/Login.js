import React, { useState } from 'react';
import './Login.css';

import api from "../services/api";

import logo from '../logo.svg';

export default function Login({ history }) {


    // react é composto por componentes, estado e propriedades

    // { history } é uma propriedade que ja vem do component de rotas do react

    // é a variavel de estado do input do componente
    // iniciando com o valor vazio ''
    // aqui é usado [] pq o useState nos retorna 2 valores
    // em forma de vetor, o setUserName serve pra modificar o estado de userName
    const [username, setUsername] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(username)

        const response = await api.post('/devs', {
            username
        });

        const { _id } = response.data;

        history.push(`/dev/${_id}`);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev" />
                <input
                    placeholder="Digite seu usuário no github"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}