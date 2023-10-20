import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HeroImg from "@/assets/images/hero.jpg";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Store from "./pages/Store";
import AddItem from "./pages/AddItem";
import Cart from "./pages/Cart";

function App() {
  return (
    <div
      className="bg-cover overflow-x-hidden t-1 bg-center bg-no-repeat object-cover h-[100vh] w-[100vw] relative"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <Header />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/store" Component={Store} />
        <Route exact path="/add-item" Component={AddItem} />
        <Route exact path="/cart" Component={Cart} />
      </Routes>
      <div className="absolute bottom-0">

      <Footer />
      </div>
    </div>
  );
}

export default App;
