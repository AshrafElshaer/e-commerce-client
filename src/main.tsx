import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./features/api/apiSlice";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";
import { ScrollToTop } from "./components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider api={apiSlice}>
        <Provider store={store}>
          {/* <ScrollToTop /> */}
          <App />
        </Provider>
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);
