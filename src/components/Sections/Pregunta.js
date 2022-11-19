import React from 'react'
import styled from 'styled-components'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

const Pregunta = ({ pregunta, texto, transicion }) => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	const Pregunta = styled.h3`
		color: #002333;
		font-weight: 700;
		font-size: 25px;

		@media screen and (max-width: 660px) {
			font-size: 24px;
		}
	`;
	const Texto = styled.p`
		color: #002333;
		font-size: 24px;
		line-height: 47px;
		text-align: left;

		@media screen and (max-width: 660px) {
			font-size: 20px;
			line-height: 32px;
		}
	`;
	const Contenedor = styled.div({
		display: "flex",
		flexDirection: "column",
	})
	return (
		<Contenedor className={pregunta} data-aos={transicion}>
			<Pregunta>{pregunta}</Pregunta>
			<Texto>{texto}</Texto>
		</Contenedor>
	)
}

export default Pregunta