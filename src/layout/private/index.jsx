import { Outlet, Navigate } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer/footer";

const PrivateLayout = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PrivateLayout;
