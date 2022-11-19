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
	const Pregunta = styled.h3({
		color: "#002333",
		fontWeight: "700",
		fontSize: "25px",
	})
	const Texto = styled.p({
		color: "#002333",
		fontSize: "24px",
		lineHeight: "47px",
		textAlign: "left"
	})
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