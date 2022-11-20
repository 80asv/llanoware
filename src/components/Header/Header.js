import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import BtnAgendar from '../BtnAgendar/BtnAgendar'
import './Header.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MenuDesplegable from '../MenuDesplegable/MenuDesplegable';
import BtnMenu from '../BtnMenu/BtnMenu';

const Header = () => {

	const [ancho] = useState(window.innerWidth);
	const [isSmall, setIsSmall] = useState(false);

	const handleResize = () => {
		if(window.innerWidth <= 660){	
			setIsSmall(true);
		} else {
			setIsSmall(false);
		}
	}

	useEffect(() => {
	  window.addEventListener("resize", handleResize)
	  return () => {
		window.removeEventListener("resize", handleResize)
	  }
	}, [ancho])
	

	const Links = styled(NavLink)`
		font-weight: 700;
		text-decoration: none;
		font-size: 18px;
	`;

	let refBoton = useRef();
	let refPanel = useRef();

	const handleClick = () => {
		if(refBoton.current.classList.contains('btn-menu')){
            //refMenu.current.classList.add('closed');
            //refPanel.current.classList.remove('panel-closed');
			console.log(refBoton);
        }
	}

	return (
		<header className='header'>
			<nav className='nav'>
				<Links end to="/" className="links">
					{
						isSmall ? <img className='Llanoware-small' src="./assets/LLanoWare-solo.png" alt="llano" /> : <img className='Llanoware-large' src="./assets/LLanoWare.png" alt="llano" />
					}
				</Links>
				<div className="items">
					<Links end activeclassname="active" to="/">Inicio</Links>
					<Links end activeclassname="active" to="/nosotros">Nosotros</Links>
					<BtnAgendar/>
				</div>
				<BtnMenu text="Abrir" refBtn={refBoton} handleClick={handleClick}/>
			</nav>
		</header>
	)
}

export default Header