import React from "react";
import Nav from "./Nav";
import "./../Style/Layout.modul.css";
function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="main">
        <div className="container">{children}</div>
      </main>
    </>
  );
}

export default Layout;
