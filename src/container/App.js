import React,{Component} from 'react';
import CardList from '../component/CardList';
import Card from '../component/Card';
import SearchBox from '../component/SearchBox';
import './App.css';
import Scroll from '../component/Scroll.js';
import ErrorBoundary from '../ErrorBoundary';
import {connect} from 'react-redux';
import {setSearchField,requestRobots} from '../action.js';
import {intialStateSearch,intialStateRobots} from '../reducer.js'

const mapStateToProps = state=>{
    return{

         searchField:state.searchRobots.searchField,
        
         robots: state.requestRobots.robots,

         isPending:state.requestRobots.isPending,

         error :state.requestRobots.error
       
       

    }
}
const mapDispatchToProps = (dispatch)=>
{
return{


    onSearchChange: (event)=>dispatch(setSearchField(event.target.value)),
    onRequestRobots:()=>dispatch(requestRobots())

}


}


class App extends Component

{ 

    constructor()
    {
        super()
        this.state=
{
 robots :[]

}
}
componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>{this.setState({robots :users})});
}



    
    render(){
         const {robots}=this.state;
    const{searchField,onSearchChange}=this.props;
           const filterRobots=this.state.robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
           
          
    
        return(
    <div className='tc'>
              <h1 className='f1'>ROBOMONO</h1>
             
                

                  <SearchBox searchChange={onSearchChange}/>


             <Scroll>
             <ErrorBoundary>

              <CardList robots={filterRobots}/>
              </ErrorBoundary>

              </Scroll>
    </div>
  );


    }
}








export default connect(mapStateToProps,mapDispatchToProps)(App);
