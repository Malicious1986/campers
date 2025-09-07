import "./App.css";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import { PersistGate } from "redux-persist/integration/react";

import { Header } from "./components/header/Header";
import { Catalog } from "./pages/catalog/Catalog";
import { Details } from "./pages/details/Details";
import { Home } from "./pages/home/Home";
import { persistor, store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          <Routes>
            <Route Component={Home} path="/" />
            <Route Component={Catalog} path="/catalog" />
            <Route Component={Details} path="/catalog/:id" />
          </Routes>
        </PersistGate>
      </Router>
    </Provider>
  );
}

export default App;
