import React, { useContext } from 'react'
import { MenuContext } from '../../context/MenuContext';
import { LogoContext } from '../../context/LogoContext';
import { NavLink } from 'react-router-dom'
import BtnAgendar from '../BtnAgendar/BtnAgendar'
import './Header.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';




const Header = () => {
	// const [ancho] = useState(window.innerWidth);
	// const [isSmall, setIsSmall] = useState(true);
	const estadoMenu = useContext(MenuContext);
	const logoCtx = useContext(LogoContext)

	// const handleResize = () => {
	// 	if(window.innerWidth <= 660){	
	// 		setIsSmall(true);
	// 	} else {
	// 		setIsSmall(false);
	// 	}
	// }
	const Links = styled(NavLink)`
		font-weight: 700;
		text-decoration: none;
		font-size: 18px;
	`;
	// useEffect(() => {
	// 	window.addEventListener("resize", handleResize)
	// 	return () => {
	// 	window.removeEventListener("resize", handleResize)
	// 	}
	// }, [ancho]);

	const handleClick = () => {
		estadoMenu.setMenu(!estadoMenu.menu);
	}


	return (
		<header className='header'>
			<nav className='nav'>
				<Links end activeclassname="active" to="/" className="links">
					<img className='Llanoware-large' src="./LlanoWare.png" alt="llano" />
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