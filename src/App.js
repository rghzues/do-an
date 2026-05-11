import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Festivals from "./pages/Festivals";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Admin from "./pages/admin/Admin";
import Download from "./pages/Download";
import { AdminRoute, PrivateRoute } from "./hook/AuthRoutes";
import Layout from "./components/Layout";
import Register from "./pages/Register";
import AdminFeedback from "./pages/admin/AdminFeedback";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminFestival from "./pages/admin/AdminFestival";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminImg from "./pages/admin/AdminUsers";
import AdminCategories from "./pages/admin/AdminUsers";
import AdminFile from "./pages/admin/AdminUsers";
import AdminCountry from "./pages/admin/AdminUsers";
import AdminReligion from "./pages/admin/AdminUsers";
import Footer from './components/Footer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="festivals" element={<Festivals />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />

        <Route
          path="downloads"
          element={
            <PrivateRoute>
              <Download />
            </PrivateRoute>
          }
        />

        <Route
          path="admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="festivals" element={<AdminFestival />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="img" element={<AdminImg />} />
          <Route path="file" element={<AdminFile />} />
          <Route path="categories" element={<AdminCategories />} />
          <Route path="feedbacks" element={<AdminFeedback />} />
          <Route path="country" element={<AdminCountry />} />
          <Route path="religion" element={<AdminReligion />} />
        </Route>

        <Route path="*" element={<div>404</div>} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
