import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <h1>Welcome to the Employee Directory</h1>
      <h5>
        Click on column header to filter by heading or search for results in the
        search box.
      </h5>
    </div>
  );
}

export default Header;
