import React from 'react'
import { Card } from '../Card/Card'
import styled from 'styled-components'

export const Areas = () => {
    const Tarjetas = styled.div({
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "4rem",
        marginTop: "6rem"
    })
  return (
    <section className='areas'>
        <h2>Areas enfocadas</h2>
        <Tarjetas className='cards'>
            <Card titulo="Desarrollo web" urlImg="https://www.placeimg.com/300/300/animals" descripcion="Despliegue de paginas web, manejo de frameworks" transicion="fade-down-left"/>
            <Card titulo="Desarrollo web" urlImg="https://www.placeimg.com/300/300/people" descripcion="Despliegue de paginas web, manejo de frameworks" transicion="fade-up-left"/>
            <Card titulo="Desarrollo web" urlImg="https://www.placeimg.com/300/300/nature" descripcion="Despliegue de paginas web, manejo de frameworks" transicion="fade-down-right"/>
            <Card titulo="Desarrollo web" urlImg="https://www.placeimg.com/300/300/tech" descripcion="Despliegue de paginas web, manejo de frameworks" transicion="fade-up-right"/>
        </Tarjetas>
    </section>
  )
}
