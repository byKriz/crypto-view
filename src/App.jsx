import { Route, Routes } from "react-router-dom";
import { NavBar } from "./containers/NavBar";
import { ThemeProvider } from "./context/ThemeContext";
import { Account } from "./routes/Account";
import { Home } from "./routes/Home";
import { SingIn } from "./routes/SingIn";
import { SingUp } from "./routes/SingUp";

function App() {
  return (
    <ThemeProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singin" element={<SingIn />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
