import React from 'react'
import { useEffect } from "react";
import { Areas } from '../components/Sections/Areas'
import BtnAgendar from '../components/BtnAgendar/BtnAgendar'
import ComoFunciona from '../components/Sections/ComoFunciona'
import DejanosAyudarte from '../components/Sections/DejanosAyudarte'
import Pregunta from '../components/Sections/Pregunta'
import 'aos/dist/aos.css';
import './Inicio.css';
import AOS from 'aos';
import CardContacto from '../components/Card/CardContacto';

const Inicio = () => {
	useEffect(() => {
		AOS.init({
			duration: 500
		});
		AOS.refresh();
	}, []);
	return (
		<main>
			<div className='inicio'>
				<div>
				<h1>Software Llanero<br/>para el mundo entero</h1>
				<p>Somos una empresa enfocada a ayudarte en<br/>temas de <b>programación y desarrollo de software</b></p>
				<BtnAgendar/> 
				</div>
			</div>
			<div className='preguntas' data-aos="fade-down-right">
				<Pregunta pregunta="¿Qué ofrecemos?" texto="Llanoware brinda apoyo integral y transversal en el área de la programación, diseño y desarrollo de software por medio de asesorías y consultorías académicas" transicion="fade-down"/>
				<Pregunta pregunta="¿A quiénes ayudamos?" texto="Brindamos ayuda a todos aquellas personas que como nosotros, aman el mundo de la programación. Asi que si eres un estudiante que busca ayuda para resolver dudas en cuanto a programacion, o no sabes como iniciar un proyecto. Estamos para ayudarte!" transicion="fade-up"/>
			</div>
			<Areas/>
			<DejanosAyudarte/>
			<ComoFunciona/>
			<div className='card-container_contacto'>
				<CardContacto/>
			</div>
		</main>
	)
}

export default Inicio