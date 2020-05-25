import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react"

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null)

  // This also needs a useCallback if a parent renders.
  // I don’t do it because it doesn’t happen in this example.
  const setThemeAndEffect = newTheme => {
    setTheme(newTheme)

    document.body.dataset.theme = newTheme
    try {
      localStorage.setItem("theme", newTheme)
    } catch (err) {
      console.log("Couldn’t save the theme in local storage.")
    }
  }

  useEffect(() => {
    setTheme(document.body.dataset.theme)

    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const listener = e => {
      const newTheme = e.target.matches ? "dark" : "light"
      setThemeAndEffect(newTheme)
    }
    darkQuery.addListener(listener)

    return () => {
      darkQuery.removeListener(listener)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeAndEffect }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("useTheme must be used within a ThemeProvider")

  const { theme, setTheme } = context

  const setThemeMemo = useCallback(newTheme => setTheme(newTheme), [setTheme])
  return { theme, setTheme: setThemeMemo }
}

export { ThemeProvider, useTheme }
