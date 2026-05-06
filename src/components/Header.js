import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../kotex/HookContext.js";
import "./Header.css";
import Navbar from "./Navbar.js";

export default function Header() {
  const { user, logout, role } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  const visitors = localStorage.getItem("visitors") || 0;
  console.log(location.pathname);

  const paths = [
    "",
    "/users",
    "/festivals",
    "/feedbacks",
    "/Country",
    "/religion",
    "/img",
    "/file",
    "/categories",
  ];

  return (
    <header
      className={`header ${paths.some((p) => location.pathname === `/admin${p}`) && "admin"}`}
    >
      <div className="logo">
        <Link to="">
          <img src="/images/logo.png" />
        </Link>
      </div>
      <Navbar />

      <div className="right-box">
        <Link to="/register" className="btn">
          Đăng ký
        </Link>

        {user ? (
          <button
            className="log-btn"
            onClick={() => {
              window.confirm("Xác nhận đăng xuất?") && handleLogout();
            }}
          >
            Đăng xuất
          </button>
        ) : (
          <Link to="/login" className="log-btn">
            Đăng nhập
          </Link>
        )}
      </div>
    </header>
  );
}
