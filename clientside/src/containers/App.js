import logo from '../logo.svg';
import './App.css';
import Header from '../component/Header/Header';
import Homepage from '../component/Homepage/Homepage';
import Singlecategory from '../component/Singlecategory/Singlecategory';
import ViewcategoryJoke from '../component/ViewcategoryJoke/ViewcategoryJoke';
import Footer from '../component/Footer/Footer';
import reactimg from '../assests/react.png';
import nodeimg from '../assests/nodejs.png';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div>
           <Header/> 
            <div className="dis">
            < Router> 
                  
                    
                          <Route path="/" exact component={Homepage}/>   
                          <Route path="/catetory" component={Singlecategory}/> 
                          <Route path="/catetoryjoke/:cat" component={ViewcategoryJoke}/> 
                  

            </Router>
          </div>
          <div className="images">
              <img src={reactimg} />
              
              <img src={nodeimg}/>
           </div>
          <Footer/>
    </div>
    
  );
}

export default App;
