import { faBug, faChalkboardTeacher, faGaugeHigh } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import CardHelp from '../Card/CardHelp'
import styled from 'styled-components'
import BtnAgendar from '../BtnAgendar/BtnAgendar'


const DejanosAyudarte = () => {
    const Cards = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        gap: 6rem;
        margin-top: 9rem;
        margin-bottom: 8rem;
    `;

  return (
    <section className='ayuda'>
        <h2>Dejanos ayudarte</h2>
        <Cards className='cards-help'>
            <CardHelp transition="fade-up" icono={faBug} titulo="Resolviendo Problemas" desc="Resolvemos dudas y errores que tengas en tu codigo"/>
            <CardHelp transition="fade-up" icono={faChalkboardTeacher} titulo="Docentes Capacitados" desc="Un profesional te ayudara con lo que necesites"/>
            <CardHelp transition="fade-up" icono={faGaugeHigh} titulo="En cuestion de Minutos" desc="Vamos directo al problema, sin enredos"/>
        </Cards>
        <BtnAgendar/>
    </section>
  )
}

export default DejanosAyudarte