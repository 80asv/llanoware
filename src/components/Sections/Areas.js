import React from 'react'
import { Card } from '../Card/Card'
import styled from 'styled-components'
import BtnAgendar from '../BtnAgendar/BtnAgendar';

export const Areas = () => {
    const Tarjetas = styled.div`
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 4rem;
        margin-top: 6rem;
        margin-bottom: 6rem;

        @media screen and (max-width: 660px) {
			    gap: 2rem;
		    }
    `;
  return (
    <section className='areas'>
        <h2>Areas enfocadas</h2>
        <Tarjetas className='cards'>
            <Card titulo="Lógica de Programación" urlImg="./assets/logicaProgramacion.jpg" descripcion="Temas escenciales al momentos de programar, conceptos básicos y complejos" transicion="fade-up"/>
            <Card titulo="Proyectos Universitarios" urlImg="./assets/proyectosUni.jpg" descripcion="¿No tienes quién te explique? Te explicamos temas que hayas visto en clase y no te hayan quedado muy claro. ¡Tambien te ayudamos a impulsar tu proyectos académicos!" transicion="fade-up"/>
            <Card titulo="Proyectos personales" urlImg="./assets/proyectosPers.jpg" descripcion="¿Estropeaste un proyecto? ¿No sabes como integrar una funcionalidad en tu código? Nosotros te ayudamos a resolver esos grander errores en tu programa y a aplicar nuevas tecnicas de programación" transicion="fade-up"/>
            <Card titulo="¡Muchas áreas mas!" urlImg="./assets/masAreas.jpg" descripcion='Tambien abarcamos areas de desarrollo de sitios web, aplicaciones, frontend, backend, entre muchas mas temas como tambien en parasigmas de programación' transicion="fade-up"/>
        </Tarjetas>
        <BtnAgendar/>
    </section>
  )
}
