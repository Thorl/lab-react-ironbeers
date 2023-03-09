import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Homepage } from "./pages/Homepage/Homepage";
import { Layout } from "./components/Layout/Layout";
import { Beers } from "./pages/Beers/Beers";
import { BeerDetails } from "./pages/BeerDetails/BeerDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/beers" element={<Beers />} />
          <Route path="/beers/:beerId" element={<BeerDetails />} />
        </Route>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
