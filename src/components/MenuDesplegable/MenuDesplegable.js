import React, { useContext } from 'react'
import { MenuContext } from '../../context/MenuContext';
import { NavLink } from 'react-router-dom';
import './MenuDesplegable.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import BtnAgendarResponsive from '../BtnAgendar/BtnAgendarResponsive';
import styled from 'styled-components';


const MenuDesplegable = () => {    
    let estadoMenu = useContext(MenuContext);
    const handleClick = () => {
        estadoMenu.setMenu(!estadoMenu.menu);
    }
    const Links = styled(NavLink)`
		font-weight: 700;
		text-decoration: none;
		font-size: 18px;
        color: #002333;
	`;

    return (
        <div>
            <div className={`panel ${estadoMenu.menu ? 'visible' : 'hidden'}`} onClick={handleClick}></div>
            <div className={`menu ${estadoMenu.menu ? 'open' : 'close'}`}>
                <div className='btn-close' onClick={handleClick}><FontAwesomeIcon icon={faXmark}/></div>
                <div className='enlaces'>
                    <Links className="enlace" end activeclassname="active" to="/" onClick={handleClick}>Inicio</Links>
                    <Links className="enlace" end activeclassname="active" to="/nosotros" onClick={handleClick}>Nosotros</Links>
                    <BtnAgendarResponsive handleClick={handleClick}/>
                </div>
            </div>
        </div>
    )
}

export default MenuDesplegable