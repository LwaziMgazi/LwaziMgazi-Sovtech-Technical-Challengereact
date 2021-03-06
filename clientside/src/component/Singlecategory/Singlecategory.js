import React from 'react';
import './Singlecategory.css'
function Singlecategory(props) {
  return (
       <div>
            <a href={'/catetoryjoke/'+props.categoryname}><div className="item">
            <h1>{props.categoryname}</h1>
            </div></a>
        </div>
  );
}

export default Singlecategory;