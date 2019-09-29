import React, { useEffect, useState } from 'react';
import './Main.css'
import { Link } from 'react-router-dom';

import api from '../services/api';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

// {match} é um recusro do react que permite 
// que peguemos parametros vindos da url
export default function Main({ match }) {

    // buscar os usuarios da api
    // setUsers serve pra modificar o valor de users
    // só podemos alterar a users atraves do setUsers
    const [users, setUsers] = useState([]);
    /* 
        toda vez que o id da url for alterado chamamos a função 
        do useEffect de novo
    */
    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/devs', {
                headers: { user: match.params.id }
            });

            // muda o estado do react
            setUsers(response.data);
        }

        loadUsers();
    }, [match.params.id]);

    async function handleLike(idUserToLike) {
        await api.post(`/devs/${idUserToLike}/likes`, null, {
            headers: { user: match.params.id }
        });

        // remove o usuario com dislike da lista
        setUsers(users.filter(user => user._id != idUserToLike));
    }

    async function handleDislike(idUserToDeslike) {
        await api.post(`/devs/${idUserToDeslike}/dislikes`, null, {
            headers: { user: match.params.id }
        });

        // remove o usuario com dislike da lista
        setUsers(users.filter(user => user._id != idUserToDeslike));
    }

    return (
        <div className="main-container">
            <Link to="/">
                <img src={logo} alt="Tindev" />
            </Link>
            {users.length > 0 ? (
                <ul>
                    {users.map(user => (
                        <li key={user._id}>
                            <img src={user.avatar} alt={user.name} />
                            <footer>
                                <strong>
                                    {user.name}
                                </strong>
                                <p>{user.bio}</p>
                            </footer>

                            <div className="buttons">
                                <button type="button" onClick={() => handleDislike(user._id)}>
                                    <img src={dislike} alt="Dislike" />
                                </button>

                                <button type="button" onClick={() => handleLike(user._id)}>
                                    <img src={like} alt="Like" />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                    <div className="empty">Acabou :(</div>
                )}
            <h1></h1>
        </div>
    );
}