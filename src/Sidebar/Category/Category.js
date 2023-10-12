import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Mango"
          title="Mango"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="H&M"
          title="H&M"
          name="test"
        />
       
      </div>
    </div>
  );
}

export default Category;
