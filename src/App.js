import React from "react";
import { BrowserRouter } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Mainpage />
      </BrowserRouter>
      <ToastContainer/>
    </React.Fragment>
  );
}

export default App;
