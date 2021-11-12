import React, { Component } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import './App.css'

export class App extends Component {
  render() {
    return (
      <div className="container">
       <div className="row">
         <h1 className="col-md-12 text-center app-header "> <i className="fab fa-youtube-square"> </i>
          &nbsp; Youtube Search Engine</h1>
       </div>
       <div className="row py-2">
         <div className="col-md-8">
           <SearchBar/>
           <h4>Video Player</h4>
           <h4>Video Description</h4>
         </div>
         <div className="col-md-4">
           <h4>Video List</h4>
         </div>
       </div>
      </div>
    )
  }
}

export default App
