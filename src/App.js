
import './App.css';
import NavBar from './components/NavBar'
import React, { Component } from 'react'
import  News from './components/News'
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
export default class App extends Component {
  pageSize = 9;
  constructor() {
  super()
  this.state = {
    progress : 0,
    apiKey : "2e6fb912780e47a989d46d11404b69cc"
  }
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
      <Router>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress} 
        height = {3}
      />
        <NavBar/>
        <Routes>
          <Route exact path="/" element = {<News setProgress = {this.setProgress} apiKey = {this.state.apiKey}  key="general" pageSize={this.pageSize} country="in" category={'general'}/>}/>
          <Route exact path="/business" element = {<News setProgress = {this.setProgress} apiKey = {this.state.apiKey} key="business" pageSize={this.pageSize} country="in" category={'business'}/>}/>
          <Route exact path="/entertainment" element = {<News setProgress = {this.setProgress} apiKey = {this.state.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category={'entertainment'}/>}/>
          <Route exact path="/health" element = {<News setProgress = {this.setProgress} apiKey = {this.state.apiKey} key="health" pageSize={this.pageSize} country="in" category={'health'}/>}/>
          <Route exact path="/sports"element = {<News setProgress = {this.setProgress} apiKey = {this.state.apiKey} key="sports" pageSize={this.pageSize} country="in" category={'sports'}/>}/>
          <Route exact path="/science"element = {<News setProgress = {this.setProgress} apiKey = {this.state.apiKey} key="science" pageSize={this.pageSize} country="in" category={'science'}/>}/>
          <Route exact path="/technology"element = {<News setProgress = {this.setProgress} apiKey = {this.state.apiKey} key="technology" pageSize={this.pageSize} country="in" category={'technology'}/>}/>
        </Routes>
      </Router>
      </div>
    )
  }
}

