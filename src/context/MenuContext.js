import React, { useState } from 'react'

// exportamos el contexto
export const MenuContext = React.createContext({});

// exportamos el provedor que da el contexto
export default function MenuContextProvider({ children }){

    // estas son las variables que seran compartidas 'globalmente'
    const [menu, setMenu] = useState(false);

    return(
        // en el atributo value se ingresan todas las variables que quieren que sean compartidas
        <MenuContext.Provider value={{menu, setMenu}}>
            {/* aqui ira nuestra app completa que usará todo el contexto */}
            {children}
        </MenuContext.Provider>
    )
}