import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Homepage } from "./pages/Homepage/Homepage";
import { Layout } from "./components/Layout/Layout";
import { Beers } from "./pages/Beers/Beers";
import { BeerDetails } from "./pages/BeerDetails/BeerDetails";
import { RandomBeer } from "./pages/RandomBeer/RandomBeer";
import { NewBeer } from "./pages/NewBeer/NewBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/beers" element={<Beers />} />
          <Route path="/beers/:beerId" element={<BeerDetails />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/new-beer" element={<NewBeer />} />
        </Route>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
