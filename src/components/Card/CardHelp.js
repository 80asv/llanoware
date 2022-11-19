import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
const CardHelp = ({ icono, titulo, desc }) => {
    const Card = styled.div`
        width: 16rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;
    const Icono = styled(FontAwesomeIcon)`
        font-size: 94px;
    `;
    const Titulo = styled.h3`
        font-size: 24px;
        text-align: center;
    `;

    const Desc = styled.p`
        font-size: 18px;
        text-align: center;
    `;
    return (
        <Card>
            <Icono icon={icono}/>
            <Titulo>{titulo}</Titulo>
            <Desc>{desc}</Desc>
        </Card>
    )
}

export default CardHelp