import { Route, Routes } from "react-router-dom";
// Layouts
import PublicLayout from "../layout/public";
import PrivateLayout from "../layout/private";
// Pages
import Home from "../pages/home";
import About from "../pages/about";
import Team from "../pages/team";
import Contact from "../pages/contact";
import Login from "../pages/login";
import Sale from "../pages/sale";
import Cart from "../pages/cart";
import AddProduct from "../pages/addproduct"
import Register from "../pages/register";

const AppRouting = () => (
  <Routes>
    <Route element={<PublicLayout />}>

  <Route path="login" element={<Login />} />
  <Route path="about" element={<About />} />
  <Route path="register" element={<Register />} />
</Route>

<Route element={<PrivateLayout />}>
<Route path="/addproduct" element={<AddProduct />} />
  <Route path="/" element={<Home />} /> 
  <Route path="sale" element={<Sale />} />
  <Route path="cart" element={<Cart />} />
  <Route path="team" element={<Team />} />
  <Route path="contact" element={<Contact />} />
</Route>

  </Routes>
);

export default AppRouting;
