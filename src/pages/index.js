import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTheme } from "../context/theme-context"

const IndexPage = () => {
  const { theme, setTheme } = useTheme()
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>
        The mode is {theme || "…"}.{" "}
        <button
          onClick={() => {
            const nextTheme = theme === "light" ? "dark" : "light"
            setTheme(nextTheme)
          }}
        >
          Switch theme
        </button>
      </p>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
