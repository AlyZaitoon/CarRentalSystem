import React from "react";
//import {Switch,Route} from 'react-router-dom'
import "./App.scss"
import { Login } from "./components/login/index";
import { Register } from "./components/login/index";
import { Reserve } from "./components/login/index";
//import {Switch,Route} from 'react-router-dom'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isLogginActive: true,
    }
  }
  
  componentDidMount() {
    //Add .right by default
    this.RightSide.classList.add("right");
  }
  changeState()
  {
    const {isLogginActive} = this.state;
    if(isLogginActive)
    {
      this.RightSide.classList.remove("right");
      this.RightSide.classList.add("left");
    }
    else
    {
      this.RightSide.classList.remove("left");
      this.RightSide.classList.add("right");
    }
    this.setState(prevState =>({isLogginActive : !prevState.isLogginActive}))
  }
  render() {
    const{isLogginActive} = this.state;
    const current = isLogginActive ? "Register" : "Login"
    const currentActive = isLogginActive ? "Login" : "Register"
    return (
      <div className="App">
        <div className = "login">
          <div className="container">
            {isLogginActive && <Login containerRef = {(ref) => this.current = ref}/>}
            {!isLogginActive && <Register containerRef = {(ref) => this.current = ref}/>}
          </div>
          <RightSide current = {current} containerRef = {ref => this.RightSide = ref} onClick = {this.changeState.bind(this)}/>
        </div>
      </div>
    );
  }
}

const RightSide = props => {
  return( 
  <div className="right-side" ref = {props.containerRef} onClick={props.onClick}>
    <div className="inner-container">
      <div className="text">{props.current}
      </div>
    </div>
  </div>
  )
}

export default App;
