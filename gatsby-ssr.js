import React from "react"
import "normalize.css"
import "typeface-fira-sans"
import "typeface-merriweather"

import { ThemeProvider } from "./src/context/theme-context"
import { PostProvider } from "./src/context/post-context"
import GlobalStyle from "./src/components/GlobalStyle"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <PostProvider>
      <>
        <GlobalStyle />
        {element}
      </>
    </PostProvider>
  </ThemeProvider>
)
