import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import allReducers from "./reducers";

// import { createGlobalStyle } from 'styled-components';

// const Global = createGlobalStyle`
// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }
// `

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, allReducers);

const store = createStore(
  persistedReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

const root = ReactDOM.createRoot((document as any).getElementById("root"));
root.render(
  //<React.StrictMode>
  // <>
  //   <Global/>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  // </>
  //</React.StrictMode>
);
