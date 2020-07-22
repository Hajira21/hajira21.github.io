import React, { Component } from 'react';
import Booking from './Booking';
class App extends Component{
  state={
    booking :[
      {name: 'Ryu', age: 25, eyes: 'blue', id:1},
      {name: 'Reeyu', age: 21, eyes: 'brown', id:2},
      {name: 'Rddyu', age: 35, eyes: 'green', id:3},
    ]

  }
  render() {
    return (
    <div className="App">
      <h1>My first React App</h1>
      <p> Welcome :)</p>
      <Booking booking={this.state.booking} />
    </div>
    );
  }
}


export default App;
