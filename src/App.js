import logo from './logo.svg';
//import './App.css';
import Member from './Component/Member';
import State1 from './Component/State1';

// function App() {
//   return (
//     <div className="App">
//       <State1/>
//     </div>
//   );
// }

import React, { Component } from 'react';
import { ReactDOM } from 'react-dom';
import DrinkMenu from './Component/DrinkMenu';

// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state ={
//       brand:"Ford",
//       color: 'red',
//       model: 'Mustang',
//       bg_color:'green'
//     }
//   }
//   changeColor =(color) => {
//     if(color=="red"){
//       this.setState({color: "Yellow"});
//       this.setState({ bg_color: "blue"});
      
//     }
//     else{this.setState({color: "red"});
//     this.setState({ bg_color: "green"});}
//   }
//   render() {
//     return (
//       <div className='product'>
//         <h2>{this.state.brand}</h2>
//         <h2 style={{color:this.state.bg_color}}>Color: {this.state.color}</h2>
//         {/* <button onClick={this.changeColor(this.state.color)} >Change Color</button> */}
//       </div>
//     );
//   }
// }

class App extends Component {
  // constructor(props){
  //   super(props)
  //   this.state={
  //     name:'your name'
  //   }
  // }
  // onChange(e){
  //   this.setState({name: e.target.value})
  // }
  render() {
    return (
      <div>
        {/* <input type='text' onChange={this.onChange.bind(this)}></input>
        <p>hello {this.state.name}</p> */}
        <DrinkMenu></DrinkMenu>
      </div>
    );
  }
}

export default App;

