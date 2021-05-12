import axios from 'axios';
import React,{Component} from 'react';
import './App.css'

class App extends Component{
  
  state={advice:''};

  componentDidMount(){
    this.fetchApiData();
  }
  fetchApiData=()=>{
    axios.get('https://api.adviceslip.com/advice').then((response)=>{
      const {advice}=response.data.slip;
      this.setState({advice:advice});
    })
    .catch((error)=>{
      console.log(error)
    });
  }
  render(){
    return(
      <div className="app">
        <div className="card">
          <blockquote className="heading">{this.state.advice}</blockquote>
          <button className="button" onClick={this.fetchApiData}>
            <span>GIVE ME ADVICE</span>
          </button>
        </div>
      </div>
    )
  }
}

export default App;
