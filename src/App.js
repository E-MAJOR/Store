//3 sections... import, function, export
//import logo from './logo.svg'; 
import './App.css';
import NavBar from"./components/navBar";
import Footer from "./components/footer";
import Catalog from './components/catalog';
import Home from './components/home';
import About from './components/about';
import Cart from './components/cart';

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import {BrowserRouter, Route, Routes} from "react-router-dom";
//import Product is automatically added by making <Product/>
// remove import Product from './components/product'; replaced in product.jsx
/*jsx not html but can use all the html that you know
className instead of class
*/
//<Product></Product> is replaced with <Catalog></Catalog> to create place for several products
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <NavBar></NavBar> {/*can use all in one NavBar/ */}

      <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/catalog" element ={<Catalog />}></Route>
          <Route path="/about" element ={<About />}></Route>
          <Route path="/aboutme" element ={<About />}></Route>
          <Route path="/cart" element = {<Cart/>}></Route>

      </Routes>             
     

      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

{/*npm install -s(save) react-router-dom*/}
