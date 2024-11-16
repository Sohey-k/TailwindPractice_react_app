// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
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
        <div className="bg-yellow-300">
          <Header />
        </div>
        <div className="flex flex-grow">
          <main className="flex-grow">
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
        <div className="flex-none">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
