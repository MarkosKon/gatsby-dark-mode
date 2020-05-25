import React from "react"
import darkModeScript from "../scripts/dark-mode.js"

export const onRenderBody = ({ setPreBodyComponents, setBodyAttributes }) => {
  setBodyAttributes({ "data-theme": "light" })
  setPreBodyComponents([
    <script
      key="dark-mode-script"
      dangerouslySetInnerHTML={{
        __html: darkModeScript,
      }}
    />,
  ])
}
