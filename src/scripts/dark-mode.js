function initializeTheme() {
  var savedTheme
  try {
    savedTheme = localStorage.getItem("theme")
  } catch (err) {
    console.log("Couldn’t get the theme from local storage.")
  }

  var darkQuery = window.matchMedia("(prefers-color-scheme: dark)")

  var resultTheme = savedTheme || (darkQuery.matches ? "dark" : "light")

  if (resultTheme === "dark") document.body.dataset.theme = "dark"
}

var IIFE = `(${initializeTheme.toString()})();`

export default IIFE
