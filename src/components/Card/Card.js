import React from 'react'
import styled from 'styled-components'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

export const Card = ({titulo, urlImg, descripcion, transicion }) => {

    useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

    const PortadaCard = styled.div({
        width: "100%",
        height: "156px",
        left: "228px",
        top: "2031px",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${urlImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        margin: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        borderTopLeftRadius: "32px",
        borderTopRightRadius: "32px",
    })

    const Tarjeta = styled.div`
        max-width: 395px;
        border-radius: 32px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        flex-grow: 1;
        border-bottom: 5px solid #c2c2cb;

        @media screen and (max-width: 660px){
            max-width: none;
            width: 100%;
        }
    `;

    

    const DescripcionCard = styled.p({
        fontSize: "18px",
        lineHeight: "34px",
        padding: "20px"
    })

    const Titulo = styled.p({
        fontWeight: "700",
        marginLeft: "15px",
        fontSize: "24px",
        color: "white",
    })
    return (
        <Tarjeta data-aos={transicion}>
            <PortadaCard>
                <Titulo>{titulo}</Titulo>
            </PortadaCard>
            <DescripcionCard>{descripcion}</DescripcionCard>
        </Tarjeta>
    )
}
