import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import BtnMenu from '../BtnMenu/BtnMenu';
import './MenuDesplegable.css'


const MenuDesplegable = () => {
    const Menu = styled.div`
        border-bottom-left-radius: 34px;
        border-bottom-right-radius: 34px;
        z-index: 1002;
        position: fixed;
        top: 0;
        left: 0;
        height: 283px;
        width: 100%;
        background-color: #eef2ff;
        overflow: overlay;
        display: flex;
        flex-direction: column;
        border-bottom: 5px solid #e57a7a;
        transition: all .4s ease;
    `;
    const Enlaces = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;

        height: 100%;
    `;
    const Panel = styled.div`
        position: fixed;
        width: 100%;
        height: 100vh;
        background-color: #000000b5;
        z-index: 1001;
        top: 0;
        left: 0;
        transition: all .3s ease-out;
    `;
    const Enlace = styled(NavLink)`
        text-decoration: none;
        padding: 12px;
    `;
    const BtnFolded = styled.div`
        position: absolute;
        right: 30px;
        top: 31px;
        cursor: pointer;
        transition: all 300ms ease;
    `;

    let refMenu = useRef();
    let refBoton = useRef();
    let refPanel = useRef();
    

    console.log(refMenu, refBoton)

    const handleClick = (e) => {
        if(refBoton.current.classList.contains('btn-menu') || refPanel.current.classList.contains('panel')){
            refMenu.current.classList.add('closed');
            refPanel.current.classList.add('panel-closed');
            console.log(refBoton);
        }
    }



    return (
        <div>
            <Panel className='panel' ref={refPanel} onClick={handleClick}></Panel>
            <Menu ref={refMenu}>
                <BtnMenu refBtn={refBoton} handleClick={handleClick} text="Cerrar"/>
                <Enlaces>
                    <Enlace end activeclassname="active" to="/">Inicio</Enlace>
                    <Enlace end activeclassname="active" to="/nosotros">Nosotros</Enlace>
                    <Enlace end activeclassname="active" to="/agendar">Agenda una tutoria</Enlace>
                </Enlaces>
            </Menu>
        </div>
    )
}

export default MenuDesplegable