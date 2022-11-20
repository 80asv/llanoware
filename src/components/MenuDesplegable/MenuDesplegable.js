import React, { useContext, useRef } from 'react'
import { MenuContext } from '../../context/MenuContext';
import { NavLink } from 'react-router-dom';
import './MenuDesplegable.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const MenuDesplegable = () => {    
    let estadoMenu = useContext(MenuContext);

    const handleClick = () => {
        estadoMenu.setMenu(!estadoMenu.menu);
    }

    return (
        <div>
            <div className={`panel ${estadoMenu.menu ? 'visible' : 'hidden'}`} onClick={handleClick}></div>
            <div className={`menu ${estadoMenu.menu ? 'open' : 'close'}`}>
                <div className='btn-close' onClick={handleClick}><FontAwesomeIcon icon={faXmark}/></div>
                <div className='enlaces'>
                    <NavLink className="enlace" end activeclassname="active" to="/" onClick={handleClick}>Inicio</NavLink>
                    <NavLink className="enlace" end activeclassname="active" to="/nosotros" onClick={handleClick}>Nosotros</NavLink>
                    <NavLink className="enlace" end activeclassname="active" to="/agendar" onClick={handleClick}>Agenda una tutoria</NavLink>
                </div>
            </div>
        </div>
    )
}

export default MenuDesplegable