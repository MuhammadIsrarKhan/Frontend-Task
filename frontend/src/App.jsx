import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HeroImg from "@/assets/images/hero.jpg";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Store from "./pages/Store";
import AddItem from "./pages/AddItem";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div
      className="bg-cover overflow-x-hidden t-1 bg-center bg-no-repeat object-cover h-[100vh] w-[100vw] relative flex flex-col cursor-pointer"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="flex-grow-1">
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route  path="/store" Component={Store} />
          <Route  path="/store/:id" Component={ProductDetail} />
          <Route  path="/add-item" Component={AddItem} />
          <Route  path="/cart" Component={Cart} />
          <Route  path="*" Component={NotFound} />
        </Routes>
      </div>
      <div className="self-start">
        <Footer />
      </div>
    </div>
  );
}

export default App;
