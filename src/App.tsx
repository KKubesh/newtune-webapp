import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>NewTunes</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/filter">Filter</Link> |{" "}
        <Link to="/catalog">Catalog</Link> |{" "}
        <Link to="/song">Song</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/user">User</Link> |{" "}
      </nav>
      <Outlet />
    </div>
  );
}