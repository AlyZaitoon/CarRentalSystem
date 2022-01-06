import './App.css';
import React,{Component} from 'react';
import Interface from './Components/LoginRegInterface';
import Login from './Components/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Components/style.scss';
class  App extends Component{
  constructor(){
    super()
    window.App = this;
    this.state = {
      page:<Interface/>
    }
  }
  changePage(props){
    this.setState({
      page:props
    })
  }
  render(){
    
    return (
      <div className="App">
       {this.state.page}
      </div>
    
    );
  }
  
}

export default App;
