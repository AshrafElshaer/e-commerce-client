import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./features/api/apiSlice";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ApiProvider api={apiSlice}>
          <App />
        </ApiProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
