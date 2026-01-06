import Navbar from "./components/Navbar";
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import ProductDetails from "./components/ProductDetails";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
<Navbar/>

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
<Route path="/products/:id" element={<ProductDetails/>}></Route>
</Routes>
<ToastContainer/>
    </>
  );
}

export default App;
