import React from "react"
import { ThemeProvider as SCThemeProvider } from "styled-components"

import GlobalStyle from "../components/GlobalStyle"
import { lightTheme } from "../themes"
import { ThemeProvider } from "../context/theme-context"

export const wrapRootElement = ({ element }) => (
  <SCThemeProvider theme={lightTheme}>
    <ThemeProvider>
      <>
        <GlobalStyle />
        {element}
      </>
    </ThemeProvider>
  </SCThemeProvider>
)
