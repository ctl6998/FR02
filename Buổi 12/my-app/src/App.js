import './App.css';
import React, { createElement } from 'react';
import Header from './Header'
import Count from './Count'


class App extends React.Component {
  
  constructor(){
    super();

    //State
    this.state = {
      text:'demo',
      status: true,
      textParent: 'Edit and save it now',
      result: 0
    }

  }
    
  logName = (value)=>{
    this.setState({
      textParent: value,
      text: 'Something new'
    })
  }

  changeText = (e)=>{
    console.log(e.target.value)
    this.setState({
      textParent: e.target.value
    })
  }

  increaseNum = ()=>{
    console.log('Counted')
    this.setState({
        result: this.state.result + 1
    })
  }

  decreaseNum = ()=>{
    console.log('Counted')
    this.setState({
        result: this.state.result - 1
    })
  }

  render(){
    //Sử dụng destructoring để kí hiệu
    const {textParent, text, status, result} = this.state;
    return (
      <div className="App">
        {/* <p>{this.state.text}</p>  */}
        <p>{textParent}</p>
        <p>{result}</p>

        <Count
            logName={this.logName}
            increaseNum={this.increaseNum}
            decreaseNum={this.decreaseNum}
        />

      </div>
    );
  }
}

export default App;
