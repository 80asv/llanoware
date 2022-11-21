import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const LinkRed = ({ icon, text, color, link }) => {

    const LinkStyles = styled.a`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        background-color: ${color};
        text-decoration: none;
        border-radius: 18px;
        cursor: pointer;
        padding: 6px;
        gap: 27px;

        &:hover{
            p{
                margin-left: 10px;
            }
        }

        .icon{
            font-size: 23px;
            margin-left: 15px;
            color: white;
        }
        p{
            margin: none;
            font-weight: 500;
            color: white;
            transition: all .1s ease-in-out;
        }
    `;

    return (
        <LinkStyles href={link} target="_blank">
            <FontAwesomeIcon className='icon' icon={icon}/>
            <p>{text}</p>
        </LinkStyles>
    )
}

export default LinkRed