import React, { Component } from 'react'
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fontSize:10
        }
    }
    Incremented = () => {
        this.setState({fontSize:this.state.fontSize + 5})
    }
    Decremented = () =>{
        this.setState({fontSize:this.state.fontSize - 5})
    }
    render() {
        const {fontSize} = this.state;
        return (
            <div className="text">
            <div style={{ fontSize: this.state.fontSize }} className="ClickText"> Simple Text </div>
            <button onMouseEnter={this.Incremented}>Incremented to {fontSize} </button>
            <button onMouseEnter={this.Decremented}>Decremented to {fontSize} </button>
            </div>
        )
    }
}
  

export default Home
