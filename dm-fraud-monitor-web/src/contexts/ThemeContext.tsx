import { createContext, useContext, useEffect, useState } from "react";

type contextType = {
    isModeDark : any, 
    toggleMode : ()=>void
  };

const ThemeContext = createContext<contextType | any>('')

const ThemeProvider = ({ children } : {children : React.ReactNode}) => {

    const [isModeDark, setIsModeDark] = useState(false)

    const toggleMode = () => {
        if (isModeDark) {
            localStorage.setItem("theme", "light")
            document.documentElement.classList.remove('dark')
        }
        else {
            localStorage.setItem("theme", "dark")
            document.documentElement.classList.add('dark')
        }
        setIsModeDark(!isModeDark)
    }

    useEffect(() => {
        if (localStorage.getItem("theme") === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            // if (localStorage.getItem("theme") === 'dark') {
            document.documentElement.classList.add('dark')
            setIsModeDark(true)
        } else {
            document.documentElement.classList.remove('dark')
            setIsModeDark(false)
        }
    }, [])

    return (
        <ThemeContext.Provider value={{ isModeDark, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext)

