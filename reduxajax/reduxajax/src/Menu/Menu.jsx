import "./Menu.css";
import React from "react";
import {HashRouter,Route} from 'react-router-dom';
import Posts from '../Posts/Posts';
import DispPhotos from '../DispPhotos/DispPhotos';
import DispPosts from '../DispPosts/DispPosts';
import Photos from '../Photos/Photos';
function template() {
  return (
    <div className="menu">
        <HashRouter>
             <div>
                  <div>
                     <a href="#/posts">Posts</a>
                     <a href="#/dispposts">dispposts</a>
                     <a href="#/photos">photos</a>
                     <a href="#/dispphotos">dispphotos</a>
                  </div>
                  <Route path="/" exact component={Posts} />
                  <Route path="/posts" component={Posts} />
                  <Route path="/dispposts" component={DispPosts} />
                  <Route path="/photos" component={Photos} />
                  <Route path="/dispphotos" component={DispPhotos} />
             </div>
        </HashRouter>
    </div>
  );
};

export default template;
