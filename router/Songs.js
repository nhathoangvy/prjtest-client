import React from 'react'
import baseControlUrl from '../db/api.js'
import Headers from './Headers.js'

class Songs extends React.Component{
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
    document.getElementById('playing').src = getParameterByName("url")
  }
  
  render() 
  {
    return (
        <div id="home">
            {this.props.children || <Headers/>}
            <iframe id="playing" src=""></iframe>
        </div>
    )
  }
}

export default Songs