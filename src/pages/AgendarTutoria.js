import React from 'react'
import Formulario from '../components/Formulario/Formulario';
import styled from 'styled-components';

const AgendarTutoria = () => {
	const AgendarStyles = styled.div`
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
		p{
			font-size: 24px;
			line-height: 38px;
		}
		@media screen and (max-width: 660px) {
			padding: 0 1rem;
			h2{
				font-size: 32px;
			}
			p{
				font-size: 17px;
				line-height: 32px;
			}
		}
	`;

	return (
		<main>
			<AgendarStyles className='container-form'>
				<h2>Agendemos una Tutoria</h2>
				<p>Diligencia el siguiente formulario en el que nos daras todos los detalles y para qué quieres la tutoria</p>
				<br />
				<Formulario/>
			</AgendarStyles>
		</main>
	)
}

export default AgendarTutoria