import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "../App.css";
import { useSelector } from "react-redux";

const Layout = () => {
  const { theme } = useSelector((state) => state.theme);
  console.log(theme);

  return (
    <div className={theme === false ? "containter" : "container-light"}>
      <Navbar />
      <Outlet />
      <footer>futer</footer>
    </div>
  );
};

export default Layout;
