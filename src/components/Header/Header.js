import React from 'react'
import { NavLink } from 'react-router-dom'
import BtnAgendar from '../BtnAgendar/BtnAgendar'
import './Header.css';
import styled from 'styled-components';

const Header = () => {

	const Links = styled(NavLink)`
		font-weight: 700;
		text-decoration: none;
		font-size: 18px;
	`;

	return (
		<header className='header'>
			<nav className='nav'>
				<Links end to="/"><img src="./assets/LlanoWare.png" alt="logo Llanoware" className='llanoware-logo'/></Links>
				<div className="items">
					<Links end activeclassname="active" to="/">Inicio</Links>
					<Links end activeclassname="active" to="/nosotros">Nosotros</Links>
					<BtnAgendar/>
				</div>
			</nav>
		</header>
	)
}

export default Header