// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import { Base } from "./pages/Base";
import { Identity } from "./pages/Identity";
import { Arsenal } from "./pages/Arsenal";
import { Logs } from "./pages/Logs";
import { Deployment } from "./pages/Deployment";
import { Signal } from "./pages/Signal";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <div className="bg-yellow-300 fixed w-full top-0 z-50">
          <Menu />
        </div>
        <div className="flex flex-grow overflow-y-auto pt-[4rem] pb-[5rem]">
          <main className="flex-grow max-w-7xl mx-auto px-4 py-6 relative z-0">
            <Routes>
              <Route path="/" element={<Base />} />
              <Route path="/identity" element={<Identity />} />
              <Route path="/arsenal" element={<Arsenal />} />
              <Route path="/logs" element={<Logs />} />
              <Route path="/deployment" element={<Deployment />} />
              <Route path="/signal" element={<Signal />} />
            </Routes>
          </main>
        </div>
        <footer className="font-extrabold text-5xl pb-8 bg-yellow-300 w-full fixed z-50 bottom-0">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Footer />
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
