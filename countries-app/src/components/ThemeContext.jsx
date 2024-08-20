import { createContext, useEffect, useState } from "react";

export const themeContext = createContext()

export const ThemeContextProvider = ({children})=>{
    const [theme,setTheme] = useState(localStorage.getItem("theme")||"light")

    useEffect(()=>{
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem("theme",theme)
    },[theme])

    const toggleTheme = ()=>{
        setTheme((prevTheme)=> prevTheme == "light" ? "dark":"light")
    }

    return(
        <themeContext.Provider value={{theme,setTheme,toggleTheme}}>
            {children}
        </themeContext.Provider>
    )
}