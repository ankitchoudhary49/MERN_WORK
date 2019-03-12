import React, { Component } from 'react';
import Display from './Display'
import InfoForm from './InfoForm'
import './App.css'
import NewFrom from './NewForm'

class App extends Component {
  state={
    displayInfos: [
      {name:'John', age:27, birthMonth:'July', id:1},
      {name:'Wick', age:30, birthMonth:'June', id:2},
      {name:'Richard', age:33, birthMonth:'September', id:3},
      {name:'Hardy', age:23, birthMonth:'May', id:4}
    ]
  }
  addInfo =(info)=>{
    info.id=Math.random();
    let displayInfos=[...this.state.displayInfos, info]
    console.log(displayInfos);
    this.setState({
      displayInfos: displayInfos
    })
  }
  deleteInfo=(id)=>{
    console.log(id);
    let displayInfos = this.state.displayInfos.filter(info=>{
      return info.id !== id
    })
    console.log('After Deleting---', displayInfos);
    this.setState({
      displayInfos
    })
  }
  render() {
    return (
      <div className="App">
      <h1>This is my App</h1>
        <Display displayInfos={this.state.displayInfos} deleteInfo={this.deleteInfo}/>
        <InfoForm />
      </div>
    );
  }
}

export default App;
