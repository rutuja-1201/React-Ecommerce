import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Search"
        />
      </div>
      <div className="profile-container">
        <a href="#">
         
          <h3>zevi</h3>
        </a>
 
      </div>
    </nav>
  );
};

export default Nav;
