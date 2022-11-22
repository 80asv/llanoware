import React from 'react'
import styled from 'styled-components'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

const CardContacto = () => {

    useEffect(() => {
		AOS.init({duration: 1000});
		AOS.refresh();
	}, []);

    const Tarjeta = styled.div`
        background-color: #FF5858;
        border-radius: 32px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: auto;
        padding: 59px 48px;
        box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;

        @media screen and (max-width: 660px) {
			flex-direction: column;
            gap: 3rem;
		}
    `;

    const Texto = styled.div`
        display: flex;
        flex-direction: column;

        
    `;

    const Titulo = styled.h2`
        font-size: 26px;
        font-weight: 700;
        margin: 10px 0;
        color: white;

        @media screen and (max-width: 660px) {
			font-size: 20px;
            text-align: center;
		}
    `;

    const Parrafo = styled.p`
        font-size: 26px;
        font-weight: 500;
        margin: 10px 0;
        color: white;

        @media screen and (max-width: 660px) {
			font-size: 20px;
            text-align: center;
		}
    `;

    const Boton = styled.button`
        padding: 20px;
        background-color: #002333;
        border-radius: 23px;
        font-weight: 500;
        font-size: 28px;
        font-family: 'Montserrat Alternates', sans-serif;
        border: none;
        width: 176px;
        height: 78px;
        color: white;
        transition: all .1s ease-in-out;

        &:hover{
            cursor: pointer;
            background-color: #eef2ff;
            color: #FF5858;
        }

        @media screen and (max-width: 660px) {
			font-size: 16px;
            width: 150px;
            height: 60px;
		}
    `;

    return (
        <Tarjeta className='card-contacto' data-aos="fade-up">
            <Texto>
                <Titulo>¿Tienes otro tipo de dudas?</Titulo>
                <Parrafo>Aquí te dejamos nuestra<br/>linea de WhatsApp ;)</Parrafo>
            </Texto>
            <Boton>Escribir</Boton>
        </Tarjeta>
    )
}

export default CardContacto