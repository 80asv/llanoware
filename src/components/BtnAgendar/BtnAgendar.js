import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BtnAgendar = () => {
	
	const LinkAgendar = styled(Link)`
		color: white;
		font-weight: 700;
		font-size: 18px;
		padding: 20px;
		background-color: #002333;
		border-radius: 10px;
		max-width: 167px;
		text-decoration: none;
		border: 3px solid #D3D3D3;
		transition: all .1s ease-in-out;

		&:hover{
		background-color: #FF5858;
		}
	`;

	return <LinkAgendar to="/agendar">Agendar una cita</LinkAgendar>
  
}

export default BtnAgendar