import React from 'react';
import "./About.css";

class About extends React.Component {
  constructor(props){
    super();
    this.state = {
      tech: ''
    };
  }
  handleChange(e){
    this.setState({
      tech: e.target.value
    })
  }
  render(){
    return (
      <div>
        <select className="dropdown" onChange={this.handleChange.bind(this)} value={this.state.tech} >
          <option value="select">Select one</option>
          <option value="Bugatti, Lamborghini , Ferrari ">Cars</option>
          <option value="planes">
          Planes
          </option>
          <option value="I dont to travel in ships">Ships</option>
        </select>
        <h2>{this.state.tech}</h2>
      </div>
    )
  }
}
export default About;