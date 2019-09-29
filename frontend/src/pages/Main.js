import React from 'react';

import logo from '../logo.svg';
//import like from '../like.svg';
//import dislike from '../dislike.svg';

import './Main.css'

// {match} é um recusro do react que permite 
// que peguemos parametros vindos da url
export default function Main({ match }) {
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev" />
            <ul>
                <li>
                    <img src="" />
                    <footer>
                        <strong>
                            Flilipe deschamps
                        </strong>
                        <p>descricao</p>
                    </footer>

                    <div className="buttons">
                        {/* <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button> */}

                        {/* <button type="button">
                            <img src={like} alt="Like" />
                        </button> */}
                    </div>
                </li>
            </ul>
            <h1>{match.params.id}</h1>;
        </div>
    );
}