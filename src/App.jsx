import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Homepage } from "./components/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}

      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
