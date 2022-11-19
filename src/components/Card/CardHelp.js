import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

function getRamdomNumber(hex){
    return Math.floor(Math.random() * hex.length);
}

function ColorChanger(){
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for(let i = 0; i<6; i++){
        hexColor += hex[getRamdomNumber(hex)];
    }
    return hexColor;
}

const CardHelp = ({ icono, titulo, desc, transition }) => {

    useEffect(() => {
		AOS.init({duration: 1000});
		AOS.refresh();
	}, []);

    const Titulo = styled.h3`
        font-size: 24px;
        text-align: center;
        transition: all .2s ease-in;

        
    `;
    const Icono = styled(FontAwesomeIcon)`
        font-size: 94px;
        transition: all .2s ease-in;
        color: #002333;

        @media screen and (max-width: 660px) {
			font-size: 60px;
		}
    `;
    const Desc = styled.p`
        font-size: 18px;
        text-align: center;
        margin: 0;
    `;
    const Card = styled.div`
        width: 16rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &:hover ${Titulo}, &:hover ${Icono}{
            color: ${ColorChanger};
            cursor: pointer;
        }

        &:hover ${Desc}{
            cursor: pointer;
        }
    `;
    

    
    return (
        <Card data-aos={transition}>
            <Icono icon={icono}/>
            <Titulo>{titulo}</Titulo>
            <Desc>{desc}</Desc>
        </Card>
    )
}

export default CardHelp