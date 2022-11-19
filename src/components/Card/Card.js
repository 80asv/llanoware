import React from 'react'
import styled from 'styled-components'

export const Card = ({titulo, urlImg, descripcion}) => {

    const Tarjeta = styled.div({
        maxWidth: "395px",
        height: "270px",
        borderRadius: "32px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        flexGrow: "1"
    })

    const PortadaCard = styled.div({
        width: "100%",
        height: "156px",
        left: "228px",
        top: "2031px",
        backgroundImage: `url(${urlImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        margin: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        borderTopLeftRadius: "32px",
        borderTopRightRadius: "32px",
    })

    const DescripcionCard = styled.p({
        fontSize: "16px",
        padding: "20px"
    })

    const Titulo = styled.p({
        fontWeight: "700",
        marginLeft: "15px",
        fontSize: "24px",
        color: "white",
    })
    return (
        <Tarjeta>
            <PortadaCard>
                <Titulo>{titulo}</Titulo>
            </PortadaCard>
            <DescripcionCard>{descripcion}</DescripcionCard>
        </Tarjeta>
    )
}
