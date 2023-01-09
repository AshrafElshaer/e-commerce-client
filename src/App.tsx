import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./Components";
import "./index.css";
import Checkout from "./Pages/Checkout";
import ProtectedRoutes from "./Pages/ProtectedRoutes";
import Account from "./Pages/User/Account";
import Address from "./Pages/User/Address";
import OrdersList from "./Pages/User/OrdersList";

const Home = lazy(() => import("./Pages/Home"));
const CategoryPage = lazy(() => import("./Pages/CategoryPage"));
const ProductPage = lazy(() => import("./Pages/ProductPage"));
const Authentication = lazy(() => import("./Pages/Authentication"));
const User = lazy(() => import("./Pages/User/User"));
const ContactSupport = lazy(() => import("./Pages/ContactSupport"));
const NoMatch = lazy(() => import("./Pages/NoMatch"));

const App = () => {
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
              <Route element={<ProtectedRoutes />}>
                <Route path='user' element={<User />}>
                  <Route index element={<Account />} />
                  <Route path='address' element={<Address />} />
                  <Route path='orders' element={<OrdersList />} />
                </Route>
                <Route path='support' element={<ContactSupport />} />
              </Route>
              <Route path='no-match' element={<NoMatch />} />
              <Route path='*' element={<NoMatch />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Suspense>
  );
};

export default App;
