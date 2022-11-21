import React, { useContext } from 'react'
import { MenuContext } from '../../context/MenuContext';
import { NavLink } from 'react-router-dom'
import BtnAgendar from '../BtnAgendar/BtnAgendar'
import './Header.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';




const Header = () => {

	const estadoMenu = useContext(MenuContext);

	const Links = styled(NavLink)`
		font-weight: 700;
		text-decoration: none;
		font-size: 18px;
	`;

	const handleClick = () => {
		estadoMenu.setMenu(!estadoMenu.menu);
	}

	return (
		<header className='header'>
			<nav className='nav'>
				<Links end to="/" className="links">
				<img className='Llanoware-large' src="./assets/LLanoWare.png" alt="llano" />
				</Links>
				<div className="items">
						<Links end activeclassname="active" to="/">Inicio</Links>
						<Links end activeclassname="active" to="/nosotros">Nosotros</Links>
						<BtnAgendar/>
				</div>
				<div className='btn-open' onClick={handleClick}><FontAwesomeIcon icon={faBars}/></div>
			</nav>
		</header>
	)
}

export default Header