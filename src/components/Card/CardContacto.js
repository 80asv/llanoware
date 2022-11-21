import React from 'react'
import styled from 'styled-components'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
import LinkRed from '../LinkRed/LinkRed';
import { faDiscord, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

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

        .links{
            width: 15rem;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        @media screen and (max-width: 660px) {
			flex-direction: column;
            gap: 3rem;

            .links{
                width: 100%;
            }
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

    return (
        <Tarjeta className='card-contacto' data-aos="fade-up">
            <Texto>
                <Titulo>¿Tienes otro tipo de dudas?</Titulo>
                <Parrafo>Aquí te dejamos nuestras<br/>líneas de atención</Parrafo>
            </Texto>
            <div className='links'>
                <LinkRed link="https://www.discord.com" text="Dicord" icon={faDiscord} color="#6178c9"/>
                <LinkRed link="https://telegram.org/" text="Telegram" icon={faTelegram} color="#2AABEE"/>
                <LinkRed link="https://www.whatsapp.com" text="WhatsApp" icon={faWhatsapp} color="#25d366"/>
            </div>  
        </Tarjeta>
    )
}

export default CardContacto