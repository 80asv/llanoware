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
            <Card titulo="Lógica de Programación" urlImg="https://img.freepik.com/vector-gratis/fondo-numeros-datos-digitales-codigo-binario_1017-30367.jpg?w=1380&t=st=1669089133~exp=1669089733~hmac=e4b5de4a12b4bab0e49cbcca3010b881735bbbccc2b8f46274807dd6602d856a" descripcion="Temas escenciales al momentos de programar, conceptos básicos y complejos" transicion="fade-up"/>
            <Card titulo="Proyectos Universitarios" urlImg="https://img.freepik.com/vector-gratis/flujo-diseno-codigo-binario_53876-97406.jpg?w=1380&t=st=1669089120~exp=1669089720~hmac=8faf4ed28dcd5f0bfe365109548bdd5c50d2e40286188977786192fca364fb71" descripcion="¿No tienes quién te explique? Te explicamos temas que hayas visto en clase y no te hayan quedado muy claro. ¡Tambien te ayudamos a impulsar tu proyectos académicos!" transicion="fade-up"/>
            <Card titulo="Proyectos personales" urlImg="https://img.freepik.com/foto-gratis/pantalla-escaneo-programador-su-reloj-inteligente-camara-telefono-inteligente_1098-18710.jpg?w=1380&t=st=1669089072~exp=1669089672~hmac=b924e7baccb27ce5d5a28fa84d01c72f1a86587cfea6c990a3881dd338cd8b42" descripcion="¿Estropeaste un proyecto? ¿No sabes como integrar una funcionalidad en tu código? Nosotros te ayudamos a resolver esos grander errores en tu programa y a aplicar nuevas tecnicas de programación" transicion="fade-up"/>
            <Card titulo="¡Muchas áreas mas!" urlImg="https://static.vecteezy.com/system/resources/previews/003/335/579/non_2x/desktop-source-code-and-wallpaper-by-coding-and-programming-free-photo.jpg" descripcion='Tambien abarcamos áreas de desarrollo de sitios web, aplicaciones, frontend, backend, entre muchas mas temas como tambien en parasigmas de programación' transicion="fade-up"/>
        </Tarjetas>
        <BtnAgendar/>
    </section>
  )
}
