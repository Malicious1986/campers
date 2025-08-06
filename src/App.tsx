import "./App.css";
import { Header } from "./components/header/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import { Home } from "./pages/home/Home";
import { Catalog } from "./pages/catalog/Catalog";
import { Details } from "./pages/details/Details";
import { Provider } from 'react-redux';
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Header />
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={Catalog} path="/catalog"/>
        <Route Component={Details} path="/catalog/:id" />
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
