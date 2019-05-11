import React from "react"
import { ThemeProvider } from "styled-components"
import "normalize.css"
import "typeface-fira-sans"
import "typeface-merriweather"

import GlobalStyle from "./src/components/GlobalStyle"
import { lightTheme } from "./src/themes"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={lightTheme}>
    <>
      <GlobalStyle />
      {element}
    </>
  </ThemeProvider>
)
