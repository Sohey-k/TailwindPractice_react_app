import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-none">
          <Header />
          <Menu />
        </div>
        <div className="flex flex-grow">
          <Sidebar />
          <Main />
        </div>
        <div className="flex-none">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
