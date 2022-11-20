import React from 'react'
import styled from 'styled-components';

const Nosotros = () => {
	const NosotrosStyles = styled.div`
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		max-width: 1124px;
		padding: 0 4rem;
		margin: 6rem auto;
		
		h2{
			font-size: 58px;
			color: #002333;
			margin: 10px 0;
		}
		h3{
			font-size: 38px;
		}
		p{
			font-size: 24px;
			line-height: 38px;
		}
		@media screen and (max-width: 660px) {
			padding: 0 1rem;
			h2{
				font-size: 40px;
			}
			h3{
				font-size: 28px;
			}
			p{
				font-size: 20px;
				line-height: 37px;
			}
		}
	`;
	return (
		<main>
			<NosotrosStyles className='nosotros'>
				<h2>Llanoware</h2>
				<p>
					Llanoware nace en la ciudad de Villavicencio buscando y apostando por el talento tecnológico local, que <b>brinda apoyo integral y transversal en el área de la programación</b>, diseño y desarrollo de software por medio de servicios de asesoría y consultoría académica enfocada, desde educación básica hasta universitaria.
				</p>
				<br />
				<h3>Misión</h3>
				<p>
					<b>Ser guía y soporte</b> para personas y empresas: asesorando, planificando y desarrollando software eficiente y de calidad.
				</p>
				<h3>Visión</h3>
				<p>
					Para 2030, Llanoware se habrá establecido como la casa de software llanera que posicionó a la región en el panorama tecnológico del país. Creando convenios con instituciones educativas y, pequeñas y medianas empresas, para la construcción de software que potencie al emprendimiento y economía nacional.
				</p>
				<br />
				<h3>Sobre nuestros servicios</h3>
				<p>
					Llanoware es una <b>centro de apoyo académico</b> que presta servicios de consultoría y asesoría académica al público miembro de instituciones educativas y/o parte de procesos de aprendizaje que involucran el desarrollo de lógica de programación, conocimiento de implicaciones propias de las ciencias de la computación, desarrollo de aplicaciones y planeación de proyectos de software.
				</p>

			</NosotrosStyles>
		</main>
	)
}

export default Nosotros