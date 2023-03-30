import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./Components/redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
      appstate={state}
      dispatchPost={store.dispatchPost.bind(store)}
      dispatchMessage={store.dispatchMessage.bind(store)}
      />
    </React.StrictMode>
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => rerenderEntireTree(store.getState()))

reportWebVitals();