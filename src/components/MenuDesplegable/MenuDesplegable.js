import React, { useContext, useRef } from 'react'
import { MenuContext } from '../../context/MenuContext';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import './MenuDesplegable.css'


const MenuDesplegable = () => {    
    let estadoMenu = useContext(MenuContext);

    const handleClick = () => {
        estadoMenu.setMenu(!estadoMenu.menu);
    }

    return (
        <div>
            <div className={`panel ${estadoMenu.menu ? 'visible' : 'hidden'}`} onClick={handleClick}></div>
            <div className={`menu ${estadoMenu.menu ? 'open' : 'close'}`}>
                <div className='btn-open' onClick={handleClick}>Cerrar</div>
                <div className='enlaces'>
                    <NavLink className="enlace" end activeclassname="active" to="/">Inicio</NavLink>
                    <NavLink className="enlace" end activeclassname="active" to="/nosotros">Nosotros</NavLink>
                    <NavLink className="enlace" end activeclassname="active" to="/agendar">Agenda una tutoria</NavLink>
                </div>
            </div>
        </div>
    )
}

export default MenuDesplegable