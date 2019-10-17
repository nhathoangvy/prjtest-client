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
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    fetch(baseControlUrl + getParameterByName("id"), {
      method: 'GET',
      headers: {
          'content-type': 'application/json'
        }
      })
    .then((res) => res.json())
    .then((data)=>{
      for(var i in data) {
        document.getElementById('playlists').innerHTML += "<li><a href='/play?url="+data[i].url+"'><img src='"+ data[i].image +"'/><br/><h3>"+ data[i].title + "</h3><br/><span>"+  data[i].artists +"</span></a></li>"
      }
    })
  }
  
  render() 
  {
    return (
    <div id="home">
        {this.props.children || <Headers/>}
        <ul id="playlists">
        </ul>
      </div>
    )
  }
}

export default Groups