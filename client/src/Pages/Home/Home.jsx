import React from 'react';
import './home.css';

const Home = () => {
    return (
        <>
        <div className="home">
            <div className="greeting">
                <h1>Hey there!</h1>
                <h2>Whant to develop a new project?</h2>
            </div>
            {/* <h1>Let´s start it!</h1> */}
                <form className="formulario">
                    <div className="nome">
                        <p>Coloque seu nome</p>
                        <input type="text" name="nome" id="nome" />
                    </div>
                    <div className="email">
                        <p>Coloque seu email</p>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="titulo">
                        <p>Coloque o título do seu projeto</p>
                        <input type="text" name="titul" id="titulo" />
                    </div>
                    <div className="descricao">
                        <p>Coloque a descrição do seu projeto</p>
                        <input type="text" name="descricao" id="descricao" />
                    </div>

                </form>
                    <button className='botao-enviar'>Enviar</button>
        </div>
        </>
    );
}
 
export default Home;