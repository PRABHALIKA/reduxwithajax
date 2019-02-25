import "./DispPhotos.css";
import React from "react";
import  TableComponent from '../TableComponent/TableComponent';

function template() {
  return (
    <div className="disp-photos">
      <h1>DispPhotos</h1>
      <TableComponent h={this.state.headers} k={this.state.keys} d={this.props.data ? this.props.data : this.state.data} />

    </div>
  );
};

export default template;
