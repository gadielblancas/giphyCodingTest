import React, { Component } from 'react';
import GiphyList from './giphyList'
import './App.css';

class App extends Component {

    //api key
    apiKey = 'CxRm9K3L2LmjbhLSFWFZa18pSvL6ZeMU';
    //building end point
    url = `http://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&limit=12&q=ryan+gosling`;

    state = {
      data:[]
    };

    getGifs(event){
      //geting the event value
      let searchStr = event.target.value;
      //adding + to whitespaces
      searchStr = searchStr.replace(/\s/g, "+");
      //final url string
      let endpoint = this.url + '&q=' + searchStr;

      //service call
      fetch(endpoint)
      .then(response => response.json())
      .then(data =>{

          this.setState({
            data:data.data
          });


      });

    }

    render() {
        console.log(this.state.data);

        return (
          <div className="container">
             <div className="search-conteiner">
                  <input className="form-control"
                  onChange={ (event) => this.getGifs(event) }
                  placeholder="search for a gif"
                  type="text"></input>
             </div>
              <div className="container">
                  <div className="row">
                       <div className="results-container">{this.state.data.length > 0? 'Results:':'search for something' }</div>
                       { this.state.data.length > 0?  <GiphyList giphydata={this.state.data}/> : null}
                  </div>

              </div>
          </div>
        );
    }
}

export default App;
