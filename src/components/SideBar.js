import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <NavLink className="side-link Dashboard" to="/admin">
        A
      </NavLink>
      <NavLink className="side-link" to="/admin/festivals">
        Festivals
      </NavLink>
      <NavLink className="side-link" to="/admin/users">
        Users
      </NavLink>
      <NavLink className="side-link" to="/admin/feedbacks">
        Feedbacks
      </NavLink>
      <NavLink className="side-link" to="/admin/Country">
        Country
      </NavLink>
      <NavLink className="side-link" to="/admin/religion">
        Religion
      </NavLink>
      <NavLink className="side-link" to="/admin/img">
        Img
      </NavLink>
      <NavLink className="side-link" to="/admin/file">
        File
      </NavLink>
      <NavLink className="side-link" to="/admin/categories">
        Categories
      </NavLink>
    </div>
  );
}
