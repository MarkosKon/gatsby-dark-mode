import React, { useState, useContext, useCallback, createContext } from "react"
import { ThemeProvider as BaseThemeProvider } from "styled-components"

import { lightTheme, darkTheme } from "../themes"

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [themeString, setThemeString] = useState("light")
  const themeObject = themeString === "dark" ? darkTheme : lightTheme
  return (
    <ThemeContext.Provider value={{ themeString, setThemeString }}>
      <BaseThemeProvider theme={themeObject}>{children}</BaseThemeProvider>
    </ThemeContext.Provider>
  )
}

function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("useTheme must be used within a ThemeProvider")
  const { themeString, setThemeString } = context
  const toggleTheme = useCallback(() => {
    if (themeString === "light") setThemeString("dark")
    else if (themeString === "dark") setThemeString("light")
  }, [themeString])
  return {
    theme: themeString,
    toggleTheme,
  }
}

export { ThemeProvider, useTheme }
