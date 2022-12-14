import { Route, Routes } from "react-router-dom";
import { NavBar } from "./containers/NavBar";
import { ThemeProvider } from "./context/ThemeContext";
import { Account } from "./routes/Account";
import { Home } from "./routes/Home";
import { SignIn } from "./routes/SignIn";
import { SignUp } from "./routes/SignUp";
import axios from "axios";
import { useEffect, useState } from "react";
import { CoinPage } from "./pages/CoinPage";
import { Footer } from "./containers/Footer";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true";

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
      // console.log(response.data)
    });
  }, []);

  return (
    <ThemeProvider>
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home coins={coins} />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
          {/* creando un link dinamico */}
          <Route path="/coin/:coinId" element={<CoinPage />}>
            <Route path=":coinId" />
          </Route>
        </Routes>
        <Footer />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
