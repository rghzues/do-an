// import "./Register.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const check = await axios.get(
        `http://localhost:3002/users?email=${form.email}`,
      );

      if (check.data.length > 0) {
        alert("Email already exists!");
        return;
      }

      await axios.post("http://localhost:3002/users", {
        fullname: form.fullname,
        email: form.email,
        password: form.password,
        role: "user",
      });

      alert("Register Success!");
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert("Error!");
    }

    alert("Register Success!");
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <h2>Đăng ký</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit">Dăng ký</button>
        </form>
        <Link to="/login">Đăng nhập</Link>
        
        <Link to="/">Back</Link>
      </div>
    </div>
  );
}

export default Register;
