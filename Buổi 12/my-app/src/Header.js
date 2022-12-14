import logo from './logo.svg';
import React from "react";


//Nhận giá trí Props
// exprot Header default function(props){}

class Header extends React.Component {
    render(){
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.props.textParent}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={()=>this.props.logName('child')}>Click child</button>
        </header>
    )
    }
}

export default Header