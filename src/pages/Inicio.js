import React from 'react'
import BtnAgendar from '../components/BtnAgendar/BtnAgendar'
import { Areas } from '../components/Sections/Areas'
import DejanosAyudarte from '../components/Sections/DejanosAyudarte'
import Pregunta from '../components/Sections/Pregunta'
import './Inicio.css' 

const Inicio = () => {
	return (
		<main>
			<div className='inicio'>
				<div>
				<h1>Software Llanero<br/>para el mundo entero</h1>
				<p>Somos una empresa enfocada a ayudarte en<br/>temas de programación y desarrollo de<br/>software</p>
				<BtnAgendar/> 
				</div>
			</div>
			<div className='preguntas'>
				<Pregunta pregunta="¿Que ofrecemos?" texto="Llanoware brinda apoyo integral y transversal en el área de la programación, diseño y desarrollo de software por medio de asesorías y consultorías académicas"/>
				<Pregunta pregunta="¿A quienes ayudamos?" texto="Brindamos ayuda a todos aquellas personas que como nosotros, aman el mundo de la programacion. Asi que si eres un estudiante que busca ayuda para resolver dudas en cuanto a programacion, o no sabes como iniciar un proyecto. Estamos para ayudarte!"/>
			</div>
			<Areas/>
			<DejanosAyudarte/>
		</main>
	)
}

export default Inicio