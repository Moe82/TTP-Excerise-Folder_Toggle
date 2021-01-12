import React, { Component } from 'react';
import './App.css';
import Folder from "./Components/Folder"
import File from "./Components/File"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {visibile: true}
  }
  toggleEdit = (event) => {
  
    if (this.state.visibile === false){
      this.setState({visibile: true})
    } else {
      this.setState({visibile: false})
    }
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.toggleEdit}>Toggle</button>
        <Folder />
        {this.state.visibile && (
        <ul>
          <li> File2 </li>
          <li> File2 </li>
          <li> File2 </li>
        </ul>
        )}
        
      </div>
    );
  }
}

export default App;
