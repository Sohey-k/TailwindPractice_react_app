import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />
      <Menu />
      <Sidebar />
      <Footer />
    </>
  );
}

export default App;
