import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import axios from 'axios'
import './index.css';

// Components
import apiKey from './Components/config.js';
import Searchform from './Components/Searchform'
import Nav from './Components/Nav'
import PhotoContainer from './Components/PhotoContainer'
import {cats, dogs, computers} from './Components/NavRoutes.js'


const api = apiKey;

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      photos: [],
      query: '',
      loading: true
    }
  }


  search = (query = 'hello') => {
    axios(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          title: query,
          loading: false
        })
      }) 
      .catch(error => {
        console.log(error)
      }) 
  }

  componentDidMount(){
    this.search();
  }

  render() {
    return(
      <BrowserRouter>
        <div className="container">
          <Searchform  onSearch={this.search}/>
          <Nav />
          <Switch>
          <Route exact path="/" render={() => <PhotoContainer data={this.state.photos} title={this.state.title} loading={this.state.loading}/>}/>
          <Route path="/search/:query" render={() => <PhotoContainer data={this.state.photos} title={this.state.title} loading={this.state.loading} />} />
          <Route path="/cats" render={() => <PhotoContainer data={cats} title='cats' loading={this.state.loading} />} />
          <Route path="/dogs" render={() => <PhotoContainer data={dogs} title='dogs' loading={this.state.loading} />} />
          <Route path="/computers" render={() => <PhotoContainer data={computers} title='computers' loading={this.state.loading} />} />
          </Switch>

      </div>
      </BrowserRouter>
      
    )
  }
}