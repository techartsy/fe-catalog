import React from 'react';
import CatalogPage from './containers/CatalogPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import './App.module.scss';

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<CatalogPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
