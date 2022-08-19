import { Route, Routes } from "react-router-dom";
import { NavBar } from "./containers/NavBar";
import { ThemeProvider } from "./context/ThemeContext";
import { Account } from "./routes/Account";
import { Home } from "./routes/Home";
import { SingIn } from "./routes/SingIn";
import { SingUp } from "./routes/SingUp";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [coins, setCoins] = useState([]);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true';

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      // console.log(response.data)
    })
  }, [url])

  return (
    <ThemeProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home coins={coins}/>} />
        <Route path="/singin" element={<SingIn />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
