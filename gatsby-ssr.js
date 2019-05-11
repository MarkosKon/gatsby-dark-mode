import React from "react"
import "normalize.css"
import "typeface-fira-sans"
import "typeface-merriweather"

import { ThemeProvider } from "./src/context/theme-context"
import GlobalStyle from "./src/components/GlobalStyle"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <>
      <GlobalStyle />
      {element}
    </>
  </ThemeProvider>
)
