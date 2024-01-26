import "./header.css";
import { IoLogoAndroid } from "react-icons/io";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <IoLogoAndroid />
        <h1 className="header-title">Title</h1>
      </div>
    </header>
  );
};

export default Header;
