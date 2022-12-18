import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import "./index.css";
import Checkout from "./pages/Checkout";

function App() {
  const Home = lazy(() => import("./pages/Home"));
  const CategoryPage = lazy(() => import("./pages/CategoryPage"));
  const ProductPage = lazy(() => import("./pages/ProductPage"));
  const Authentication = lazy(() => import("./pages/Authentication"));
  const NoMatch = lazy(() => import("./pages/NoMatch"));

  return (
    <Suspense>
      <div role='body' className='w-full font-manrope'>
        <Navbar />
        <main>
          <Routes>
            <Route path='/'>
              <Route index element={<Home />} />
              <Route path=':category'>
                <Route index element={<CategoryPage />} />
                <Route path=':productId' element={<ProductPage />} />
              </Route>
              <Route path='auth' element={<Authentication />} />
              <Route path='checkout' element={<Checkout />} />
              <Route path='/no-match' element={<NoMatch />} />
              <Route path='*' element={<NoMatch />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
