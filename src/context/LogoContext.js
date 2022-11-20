import React, { useState, useEffect } from 'react'

// exportamos el contexto
export const LogoContext = React.createContext({});

// exportamos el provedor que da el contexto
export default function LogoContextProvider({ children }){

    // estas son las variables que seran compartidas 'globalmente'
    const [ancho] = useState(window.innerWidth);
    const [isSmall, setIsSmall] = useState(true);

    const handleResize = () => {
		if(window.innerWidth <= 660){	
			setIsSmall(true);
		} else {
			setIsSmall(false);
		}
	}

    useEffect(() => {
        handleResize()
        window.addEventListener("resize", handleResize)
		return () => {
            window.removeEventListener("DOMContentLoaded", handleResize)
		}
	}, [ancho]);


    return(
        // en el atributo value se ingresan todas las variables que quieren que sean compartidas
        <LogoContext.Provider value={{
            ancho,
            handleResize,
            isSmall,
            setIsSmall
        }}>
            {/* aqui ira nuestra app completa que usará todo el contexto */}
            {children}
        </LogoContext.Provider>
    )
}