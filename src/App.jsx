import { ThemeProvider } from "styled-components"
import "./App.css"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { Routers } from "./routes"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Routers />
    </ThemeProvider>
  )
}

export default App
