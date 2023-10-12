import Category from "./Category/Category";
import Price from "./Price/Price";
import "./Sidebar.css";
import "./../db/data"
import data from "./../db/data";

const star =data.star
const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
           <h1>Search Results</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
       
      </section>
    </>
  );
};

export default Sidebar;
