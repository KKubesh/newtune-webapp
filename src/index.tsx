import React from "react";
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import FilterPage from "./components/FilterPage";
import CatalogPage from "./components/CatalogPage";
import './App.css';
import UserPage from "./components/UserPage";
import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext";
import { FilterProvider } from "./context/FilterContext";

const rootElement = document.getElementById("root");
render(
  <AuthProvider>
    <UserProvider>
      <FilterProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="filter" element={<FilterPage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="user" element={<UserPage />} />
          </Routes>
        </BrowserRouter>
      </FilterProvider>
    </UserProvider>
  </AuthProvider>,
  rootElement
);
