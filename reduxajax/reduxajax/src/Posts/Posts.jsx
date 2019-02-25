import "./Posts.css";
import React from "react";

function template() {
  return (
    <div className="posts">
      <h1>Posts</h1>
      <input type='button' value='get posts' onClick={this.fnGetPosts.bind(this)} />
    </div>
  );
};

export default template;
