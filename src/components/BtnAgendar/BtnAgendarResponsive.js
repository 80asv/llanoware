import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BtnAgendarResponsive = ({ handleClick }) => {
	
	const LinkAgendarResponsive = styled(Link)`
		color: white;
		font-weight: 700;
		font-size: 16px;
		font-family: 'Montserrat Alternates', sans-serif;
		padding: 14px;
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

	return <LinkAgendarResponsive onClick={handleClick} to="/agendar">Agendar turoría</LinkAgendarResponsive>
  
}

export default BtnAgendarResponsive