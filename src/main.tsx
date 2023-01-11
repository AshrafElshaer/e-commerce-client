import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./features/api/apiSlice";
import { store, persistor } from "./app/store";
import { BrowserRouter } from "react-router-dom";
import { ScrollToTop } from "./Components";
import { PersistGate } from "redux-persist/integration/react";
import { categoriesApiSlice } from "./features/categoriesSlice";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === "production") disableReactDevTools();
store.dispatch(categoriesApiSlice.endpoints.getCategories.initiate());

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider api={apiSlice}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ScrollToTop />
            <App />
          </PersistGate>
        </Provider>
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);
