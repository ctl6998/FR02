import './App.css';
import React, { createElement } from 'react';
import Header from './Header'


// function App() {
//   // const div = document.createElement('div')
//   // div.className = 'app'

//   // return React.createElement('div',{className:'App'},'test')
//   return React.createElement('div',{className:'App'},
//     createElement('div',{className:'App2'},'test2')
//   )
// }

//// Chạy bằng function
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


////Chạy bằng class
class App extends React.Component {
  
  constructor(){
    super();

    //State
    this.state = {
      text:'demo',
      status: true,
      textParent: 'Edit and save it now',
    }

    // this.logName = this.logName.bind(this)

  }
  
  // logName(){
  //   console.log('runnnn')
  // }

  // Nếu để như thế này phải dùng bind hoặc đổi thành arrow để gọi trong butotn
  // logName(){
  //   this.setState({
  //     textParent: 'change'
  //   })
  // }
  
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

  render(){
    //Sử dụng destructoring để kí hiệu
    const {textParent, text, status} = this.state;
    return (
      <div className="App">
        {/* <p>{this.state.text}</p>  */}
        <p>{textParent}</p>

        {/* Truyền giá trị props đến child */}
        <Header 
          textParent={this.state.textParent} 
          logName={this.logName}
        />

        {/* <button onClick={this.logName(1)}>Click Parent</button> */}
        <button onClick={()=>this.logName('1')}>Click Parent</button>
        <input type='text' id='input-parent' placeholder='Input Parent' onChange={this.changeText}></input>
      
      </div>
    );
  }
}

export default App;
