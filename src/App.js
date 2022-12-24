import React from "react";
import { BrowserRouter } from "react-router-dom";
import Mainpage from "./components/Mainpage";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Mainpage />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
