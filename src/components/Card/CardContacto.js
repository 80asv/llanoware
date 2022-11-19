import React from 'react'
import styled from 'styled-components'

const CardContacto = () => {

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
    `;

    const Texto = styled.div`
        display: flex;
        flex-direction: column;
    `;

    const Titulo = styled.h2`
        font-size: 32px;
        font-weight: 700;
        margin: 10px 0;
        color: white;
    `;

    const Parrafo = styled.p`
        font-size: 32px;
        font-weight: 500;
        margin: 10px 0;
        color: white;
    `;

    const Boton = styled.button`
        padding: 20px;
        background-color: #002333;
        border-radius: 23px;
        font-weight: 500;
        font-size: 32px;
        font-family: 'Montserrat Alternates', sans-serif;
        width: 176px;
        height: 83px;
        color: white;

        &:hover{
            cursor: pointer
        }
    `;

    return (
        <Tarjeta className='card-contacto'>
            <Texto>
                <Titulo>¿Tienes otro tipo de dudas?</Titulo>
                <Parrafo>Aquí te dejamos nuestra<br/>linea de WhatsApp ;)</Parrafo>
            </Texto>
            <Boton>Escribir</Boton>
        </Tarjeta>
    )
}

export default CardContacto