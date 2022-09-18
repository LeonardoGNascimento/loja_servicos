import { ThemeProvider } from "styled-components";
import { AppRouter } from "./AppRouter";
import { theme } from "./theme/custom.theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
