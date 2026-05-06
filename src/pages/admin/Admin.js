import { Outlet } from "react-router-dom";
import Sidebar from "../../components/SideBar";
export default function Admin() {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
}
