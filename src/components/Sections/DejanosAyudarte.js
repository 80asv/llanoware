import { faBug, faChalkboardTeacher, faGaugeHigh } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import CardHelp from '../Card/CardHelp'
import styled from 'styled-components'


const DejanosAyudarte = () => {
    const Cards = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 50px;
    `;

  return (
    <section className='ayuda'>
        <h2>Dejanos ayudarte</h2>
        <Cards className='cards-help'>
            <CardHelp icono={faBug} titulo="Resolviendo Problemas" desc="Resolvemos dudas y errores que tengas en tu codigo"/>
            <CardHelp icono={faChalkboardTeacher} titulo="Docentes Capacitados" desc="Un profesional te ayudara con lo que necesites"/>
            <CardHelp icono={faGaugeHigh} titulo="En cuestion de Minutos" desc="Vamos directo al problema, sin enredos"/>
        </Cards>
    </section>
  )
}

export default DejanosAyudarte