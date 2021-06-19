import React, { useState, useEffect } from 'react';
import api from '../services/api';


function Livro() {
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        api.get('books',{}).then(response => {
            setLivros(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Livros</h1>
            <ul>
                {
                    livros.map(livro => (
                        <li>
                            <p>Id: {livro.id}</p>
                            <p>Nome: {livro.nome}</p>
                            <p>editora: {livro.codigoeditora}</p>
                            <p>isbn: {livro.issbn}</p>
                        </li>
                        
                    ))
                }
            </ul>
        </div>
    );
}

export default Livro;

