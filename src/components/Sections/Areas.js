import React from 'react'
import { Card } from '../Card/Card'
import styled from 'styled-components'

export const Areas = () => {
    const Tarjetas = styled.div`
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 4rem;
        margin-top: 6rem;

        @media screen and (max-width: 660px) {
			    gap: 2rem;
		    }
    `;
  return (
    <section className='areas'>
        <h2>Areas enfocadas</h2>
        <Tarjetas className='cards'>
            <Card titulo="NOse" urlImg="https://www.placeimg.com/300/300/animals" descripcion="Despliegue de paginas web, manejo de frameworks" transicion="fade-up"/>
            <Card titulo="Proyectos Universitarios" urlImg="https://www.placeimg.com/300/300/people" descripcion="Temas visto en clase que son complicados" transicion="fade-up"/>
            <Card titulo="Proyectos personales" urlImg="https://www.placeimg.com/300/300/nature" descripcion="Solucionamos errores y refactorizamos tu código" transicion="fade-up"/>
            <Card titulo="Desarrollo web" urlImg="https://www.placeimg.com/300/300/tech" descripcion="Despliegue de paginas web, manejo de frameworks" transicion="fade-up"/>
        </Tarjetas>
    </section>
  )
}
