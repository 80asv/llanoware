import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const BtnMenu = ({ refBtn, handleClick, text }) => {
  return (
    <div className='btn-menu' ref={refBtn} onClick={handleClick}>
        {text}
    </div>
  )
}

export default BtnMenu;