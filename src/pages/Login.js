import { useState, useEffect } from "react";
import { useAuth } from "../kotex/HookContext";
import { useNavigate } from "react-router-dom";
import { Eye, EyeClosed } from "lucide-react";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    const Email = localStorage.getItem("Email");
    Email && setEmail(Email);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    const success = await login(email, password);

    if (success) {
      alert("Login thành công");
      navigate("/");
    } else {
      alert("Sai tài khoản hoặc mật khẩu");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Đăng nhập</h2>

      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="pass-box">
        <input
          type={showPass ? "text" : "password"}
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <span onClick={() => setShowPass(!showPass)}>
          {showPass ? <EyeClosed /> : <Eye />}
        </span>
      </div>

      <button type="submit">Login</button>

      <button type="button" onClick={() => navigate("/")}>
        Back Home
      </button>

      <button type="button" onClick={() => navigate("/register")}>
        Đăng ký
      </button>
    </form>
  );
}
