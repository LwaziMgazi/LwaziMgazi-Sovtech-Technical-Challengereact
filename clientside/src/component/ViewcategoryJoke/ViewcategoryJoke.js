import React,{Component} from 'react';
import homeicon from '../../assests/home.png';
import { loadJokes } from '../../Graphqlservices/requests';
import './ViewcategoryJoke.css';
import PuffLoader from 'react-spinners/PuffLoader';
import { css } from "@emotion/core";
import { connect} from "react-redux";
import { load } from "../../Reducers/action";

class ViewcategoryJoke extends Component{
   
    //css for spinner
     override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
        `;
   
    constructor(props){
        super(props);
        this.state={joke:'',loading:true,color:"#000000"};

    }
 
   async componentDidMount()
   {
       const cateparam=this.props.match.params.cat;
       const joke= await loadJokes(cateparam);
      this.props.test(joke);
       this.setState({joke:joke,loading:false})
     
   }
    
render() {
  return (
    
        <div className="categoryjoke">
          <h1>{this.props.match.params.cat}</h1>
          <div className="para">
          <PuffLoader color={this.state.color} loading={this.state.loading} css={this.override} size={150} />
            <p>{this.props.joke}</p>
          </div>
          <a href={'/'}><img className="homeicon" src={homeicon}/></a>
         
        </div>
   
  );
}
}

function mapStateToProps(state){
     return {
        joke : state.joke
     }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    test: (a)=> dispatch(load(a))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewcategoryJoke);