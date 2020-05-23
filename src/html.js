import React from "react"
import PropTypes from "prop-types"

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes} className="light">
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function initializeTheme() {
                try {
                  window.__theme = localStorage.getItem("theme");
                } catch (err) {
                  console.log("Couldn’t get the theme from local storage.");
                }
              
                var callbacks = [];
                window.__addCallback = function(cb) {
                  callbacks.push(cb);
                };
                window.__removeCallback = function(cb) {
                  callbacks = callbacks.filter(function(callback) {
                    return callback !== cb;
                  });
                };
              
                window.__setTheme = function setTheme(newTheme) {
                  window.__theme = newTheme;
                  document.body.className = newTheme;
                  callbacks.forEach(function(cb) {
                    cb();
                  });
                  try {
                    localStorage.setItem("theme", newTheme);
                  } catch (err) {
                    console.log("Couldn’t save the theme in local storage.");
                  }
                };
              
                var darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
                darkQuery.addListener(function darkQueryListener(e) {
                  window.__setTheme(e.matches ? "dark" : "light");
                });
              
                window.__setTheme(
                  window.__theme || (darkQuery.matches ? "dark" : "light")
                );
              })();
            `,
            }}
          />
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
