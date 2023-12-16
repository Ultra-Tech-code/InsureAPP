import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import "../../../styles/style.css";

const Button = (props) => {
  const { description, width, fontSize, route, icon } = props;
  const baseURL= process.env.REACT_APP_BASE_URL


  return (
    <div>
      <button
        className={`bg-[#e76927] text-center text-white px-6 py-3 rounded-[8px] text-bold my-2 hover:bg-[#ffa074] hover:text-[#ffffff] align-self-center ${
          width || "0"
        } ${fontSize || "text-[1.125rem]"} ${icon? 'flex self-center': ''}`}
      >
        {parse(`${icon || ""}`)}
        <Link to={ route || ""}>{description || "Add Description"}</Link>
      </button>
    </div>
  );
};

export default Button;
