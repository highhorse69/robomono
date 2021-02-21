import React,{Component} from 'react';



import CardList from '../component/CardList';
import Card from '../component/Card';

import SearchBox from '../component/SearchBox';
import './App.css';
import Scroll from '../component/Scroll.js';
import ErrorBoundary from '../ErrorBoundary';



class App extends Component

{
    constructor()
    {
        super()
        this.state=
{
 robots :[],
 searchField : ''

}
}
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>{this.setState({robots :users})});
}
onSearchChange = (event) =>
{
    this.setState({searchField: event.target.value })
    
}


    
    render(){
           const filterRobots=this.state.robots.filter(robot =>{
        return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
           
          
    
        return(
    <div className='tc'>
              <h1 className='f1'>ROBOMONO</h1>
             
                

                  <SearchBox searchChange={this.onSearchChange}/>


             <Scroll>
             <ErrorBoundary>

              <CardList robots={filterRobots}/>
              </ErrorBoundary>

              </Scroll>
    </div>
  );


    }
}








export default App;
