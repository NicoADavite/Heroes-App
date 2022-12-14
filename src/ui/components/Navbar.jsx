import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-5">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={`nav-item nav-link ${({ isActive }) =>
              isActive ? "active" : ""}`}
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={`nav-item nav-link ${({ isActive }) =>
              isActive ? "active" : ""}`}
            to="/dc"
          >
            DC
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end align-items-center">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-white">Nicolás</span>
          <button className="nav-item nav-link btn text-danger">Log Out</button>
        </ul>
      </div>
    </nav>
  );
};
