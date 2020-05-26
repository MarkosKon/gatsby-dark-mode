import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react"

const ThemeContext = createContext()

let firstTime = true

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    setTheme(document.body.dataset.theme)

    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const listener = e => {
      const newTheme = e.target.matches ? "dark" : "light"
      setTheme(newTheme)
    }
    darkQuery.addListener(listener)

    return () => {
      darkQuery.removeListener(listener)
    }
  }, [])

  useEffect(() => {
    if (!firstTime) {
      // Don’t run it without reason the second
      // time and when the color scheme and the
      // current theme are the same.
      if (theme !== document.body.dataset.theme) {
        document.body.dataset.theme = theme
        try {
          localStorage.setItem("theme", theme)
        } catch (err) {
          console.log("Couldn’t save the theme in local storage.")
        }
      }
    } else {
      firstTime = false
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("useTheme must be used within a ThemeProvider")

  const { theme, setTheme } = context

  return { theme, setTheme }
}

export { ThemeProvider, useTheme }
