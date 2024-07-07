import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { AuthContext } from "../context/Auth";
function Navbar() {
  const { token, logOut, decoded } = useContext(AuthContext);
  return (
    <>
      <nav>
        <h1>Navbar</h1>
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>

          {decoded && decoded.role === "admin" ? (
            <Link to={"/admin"}>Admin</Link>
          ) : null}
          {token ? (
            <>
              <Link to={"/profil"}>Profil</Link>
              <button onClick={logOut}>Log Out</button>
            </>
          ) : (
            <>
              <Link to={"/login"}>Login</Link>
              <Link to={"/register"}>Register</Link>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
