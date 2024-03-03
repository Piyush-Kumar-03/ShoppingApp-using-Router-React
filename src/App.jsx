import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"

const App = () => {
  return (
    <div className="w-full">
      <div className="bg-slate-900 w-full fixed z-10 top-0">
        <Navbar/>
      </div>
      <div className="mt-[50px]">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
