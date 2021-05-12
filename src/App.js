import React,{Component} from 'react';
import Logo from './Logo';
import Href from './Href';
import Info from './Info';
import Info1 from './Info1';
import Info2 from './Info2';

import './App.css';




class App extends Component

{ 
 
render(){
      return(

        <div>
         <Logo/>
         <Href/>
         <Info/>
         <Info1/>
         <Info2/>
        </div>
        );
      
    }
}








export default App;

