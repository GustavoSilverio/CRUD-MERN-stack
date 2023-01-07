import React from 'react';
import './template.css';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Rotas from '../../Routes/Routes';


const Template = () => {
    return (
        <>
        <Header/>
        <div className="container">
            <Rotas></Rotas>
        </div>
        <Footer/>
        </>
     );
}
 
export default Template;