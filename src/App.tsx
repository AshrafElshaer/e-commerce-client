import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import "./index.css";
import ProductPage from "./pages/productPage";
import CategoryPage from "./pages/categoryPage";
import NoMatch from "./pages/noMatch";

function App() {
  return (
    <div role='body' className='w-full font-manrope'>
      <main>
        <Navbar />
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='category/:category' element={<CategoryPage />} />
            <Route path='product/:productId' element={<ProductPage />} />
            <Route path='*' element={<NoMatch />} />
          </Route>
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
