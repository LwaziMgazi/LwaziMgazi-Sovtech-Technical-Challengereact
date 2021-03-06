import React ,{Component} from 'react';
import Singlecategory from '../Singlecategory/Singlecategory';
import {loadData} from '../../Graphqlservices/requests';
import './Homepage.css';
import { load } from '../../Reducers/action';
import { connect } from 'react-redux';


class Homepage extends Component{

  constructor(props){
    super(props);
    this.state={
      categories:[]
    
    }
  }
 
   
  
 
  async componentDidMount(){
     const categories = await loadData();
     this.setState({categories});
  }
render() {
  return this.state.categories.map((cat)=>{
  return (
    <div className="catlist" >
       <Singlecategory categoryname={cat}  />
        
    </div>
    );

  })
 
  }
}

const mapDispatchToProps=(dispatch)=>{
   return{
     test: ()=> dispatch(load("money"))
   }
}
export default connect(mapDispatchToProps) (Homepage);