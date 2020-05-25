import { useState, useEffect } from "react"

export const useTheme = () => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    setTheme(window.__theme)

    const callback = () => setTheme(window.__theme)
    window.__addCallback(callback)
    return () => {
      window.__removeCallback(callback)
    }
  }, [])

  return {
    theme,
    setTheme: newTheme => window.__setTheme(newTheme),
  }
}
