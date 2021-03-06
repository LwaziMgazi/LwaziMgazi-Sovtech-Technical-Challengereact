import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { load } from "../../Reducers/action";

const style={
    font: 'Comic Sans MS',
 backgroundColor:' rgb(37, 150, 190,0.3)',
}
function Header() {
  
   
  return (
    <div className="header" style={style} >
     <h1 >SovTech Technical Assessment</h1>
    </div>
  );
}

export default Header;