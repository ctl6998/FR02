import React from "react";

class Count extends React.Component{
    render(){
        console.log(this.props)
        return(
        <div>
            <button onClick={()=>this.props.increaseNum()}>+</button>
            <button onClick={()=>this.props.decreaseNum()}>-</button>
            <button onClick={()=>this.props.logName('Test')}>Test</button>
        </div>
        )
    }
}

export default Count