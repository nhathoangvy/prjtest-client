import React from 'react'
import baseControlUrl from '../db/api.js'
import Headers from './Headers.js'

class Groups extends React.Component{
  constructor() {
    super();
  
    this.state = {
       data: []
    }
 }

  componentDidMount() {
    fetch(baseControlUrl, {
      method: 'GET',
      headers: {
          'content-type': 'application/json'
        }
      })
    .then((res) => res.json())
    .then((data)=>{
      for(var i in data) {
        document.getElementById('groups').innerHTML += "<li><a href='/playlists?id="+data[i].id+"'><h3>"+ data[i].title + "</h3></a></li>"
      }
    })
  }
  
  render() 
  {
    return (
    <div id="home">
      {this.props.children || <Headers/>}
        <ul id="groups">
        </ul>
      </div>
    )
  }
}

export default Groups