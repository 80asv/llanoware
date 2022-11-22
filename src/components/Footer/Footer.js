
import React, { useContext } from 'react'
import { LogoContext } from '../../context/LogoContext';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'





const Footer = () => {

	let logoCtx = useContext(LogoContext);

	return (
		<footer>
			<div className='container'>
				{
					logoCtx.isSmall ? <img className='logo-footer' src="./LlanoWare-soloInvert.png" alt="Llanoware" /> : <img className='logo-footer-large' src="./LlanoWareInvert.png" alt="Llanoware" />
				}
				<div className='links'>
					<NavLink end activeclassname="active" to="/">Inicio</NavLink>
					<NavLink end activeclassname="active" to="/nosotros">Nosotros</NavLink>
				</div>
				<div className='sub-footer'>
					<p>UMD</p>
					<div className='icons'>
						<a href="https://www.github.com"><FontAwesomeIcon icon={faGithub}/></a>
						<a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram}/></a>
						<a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter}/></a>
					</div>
					<p>Todos los derechos<br/>reservados</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer