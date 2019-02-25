import "./Photos.css";
import React from "react";

function template() {
  return (
    <div className="photos">
      <h1>Photos</h1>
      <input type="button" value="get photos" onClick={this.fngetphotos.bind(this)} />
    </div>
  );
};

export default template;
