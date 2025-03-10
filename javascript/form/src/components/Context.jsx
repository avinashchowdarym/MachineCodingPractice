import React, {  createContext, useEffect, useState } from 'react'

export const Dark = createContext();

const Context = ({ children }) => {
    const [dark, setDark] = useState(false);

    const theme = dark ? 'dark' : 'light';
    const toggleTheme = () => {
        setDark(!dark);
    }
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [dark])
    return (
        <Dark.Provider value={{dark,setDark}}>{children}</Dark.Provider>
    )
}

export default Context;