import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./component/App";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
let rerender = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

rerender();

store.subscribe(() => {
  rerender();
});
