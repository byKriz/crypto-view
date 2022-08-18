import { NavBar } from "./containers/NavBar";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
