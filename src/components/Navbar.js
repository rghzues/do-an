import { NavLink } from "react-router-dom";
import { useAuth } from "../kotex/HookContext";
import "./Navbar.css";

export default function Navbar() {
  const { role = "guest", user } = useAuth();

  return (
    <nav className="navbar">
      <NavLink to="/festivals" className="nav-link">
        Festivals
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
      <NavLink to="/faq" className="nav-link">
        FAQ
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        Contact
      </NavLink>
      {role !== "admin" && (
        <NavLink
          to="/downloads"
          className="nav-link"
          onClick={() => {
            !user && alert("Đăng nhập tài khoản của bạn");
          }}
        >
          My Downloads <i className="fa-solid fa-download"></i>
        </NavLink>
      )}

      {role === "admin" && (
        <NavLink to="/admin" className="nav-link">
          Admin <i class="fa-solid fa-screwdriver-wrench"></i>
        </NavLink>
      )}
    </nav>
  );
}
