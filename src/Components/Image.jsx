import React from "react";
import "./imagesection.css";

const Image = () => {
  return (
    <div className="imagebox">
      <img
        className="image"
        src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGxhcHRvcHxlbnwwfHwwfHw%3D&w=1000&q=80"
        alt="Error"
      />

      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio
        ad accusantium dicta reprehenderit maiores velit nemo, facilis modi,
        ducimus eveniet suscipit inventore, quisquam veniam aspernatur. Cumque
        impedit illo laboriosam.
      </p>
    </div>
  );
};

export default Image;
