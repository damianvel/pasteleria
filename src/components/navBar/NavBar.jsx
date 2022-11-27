import "./Navbar.css";


import { CartWidget } from "../cartWidget/CartWidget";

const NavBar = () => {

  

  return (
    <div className="navbar-container">
      <div className="container-logo">
        <img
          className="logo-navbar"
          src="https://res.cloudinary.com/dolnw6mjt/image/upload/v1669506402/55883501b33220f375d0d8959f0e43fc_dwxjql.jpg"
          alt=""
        />
      </div>
      <ul className="navbar">
        <li className="navbar-item">TORTAS</li>
        <li className="navbar-item">CUPCAKES</li>
        <li className="navbar-item">ESPECIALES</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
