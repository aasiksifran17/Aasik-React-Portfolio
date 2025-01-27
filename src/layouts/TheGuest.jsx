import TheNavBar from "../components/TheNavBar";
import { Outlet } from "react-router-dom";

const TheGuestLayout = () => {
  return (
    <div className="font-Sen">
      <TheNavBar />
      <Outlet />
    </div>
  );
};

export default TheGuestLayout;
