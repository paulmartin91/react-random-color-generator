import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      input: "",
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      input: event.target.value
    })

  }
  render(){
  const colorArr = (colors = [
    '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
  ]) => colors[Math.floor(Math.random() * 51)]
  return (
    <div style={{width: "500px", padding: "20px"}}>
      <header>
        <p>
          <u style={{color: colorArr()}}>
          <span style={{color: colorArr()}}>Here </span>
          <span style={{color: colorArr()}}>is </span>
          <span style={{color: colorArr()}}>an </span>
          <span style={{color: colorArr()}}>example </span>
          <span style={{color: colorArr()}}>of </span>
          <span style={{color: colorArr()}}>the </span>
          <span style={{color: colorArr()}}>random </span>
          <span style={{color: colorArr()}}>color </span>
          <span style={{color: colorArr()}}>generator</span>
          <span style={{color: colorArr()}}>!</span>
          </u>
          <br />
          <br />
          As the color property of the element is set to a function that 
          returns a random color, every time the DOM changes, the color changes with it! 
          The input element below has an onChange function that updates the state
          with the input when you type. Type something in and see what happens...
        </p>
      </header>
      <input onChange={this.handleChange} placeholder="Type something here..."/>
      <br />
      <h1 style={{color: colorArr()}}>{this.state.input}</h1>
    </div>
  );
  }
}

export default App;
