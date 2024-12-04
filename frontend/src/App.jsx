import React from "react";
import GlobalLayout from "./pages/GlobalLayout.jsx";
import LooperGroup from "./assets/LooperGroup2.png"
import './App.css'
import Home from './pages/Home.jsx'
import Navbar from './components/NavBar.jsx';
function App() {
  return (
    <GlobalLayout>
      <main className="">
        {/* <Navbar /> */}
        <Home />
      </main>
    </GlobalLayout>
  );
}

export default App;
