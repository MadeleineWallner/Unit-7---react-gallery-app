import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import axios from 'axios'
import './index.css';

// Components
import Searchform from './Components/Searchform'
import Nav from './Components/Nav'
import PhotoContainer from './Components/PhotoContainer'
import Error from './Components/Error'
import Loading from './Components/Loading'
import {cats, dogs, cows} from './Components/NavRoutes.js'

const api = process.env.REACT_APP_API_KEY;
export default class App extends Component {

  constructor(){
    super();
    this.state = {
      photos: [],
      query: '',
      loading: true
    }
  }

  //Run the search method when the page first loads
  componentDidMount(){
    this.search("frogs");
  }

  //Fetch the data and update state.
  search = (query) => {
    this.setState({loading: true})
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


  render() {
    return(
      <BrowserRouter>
        <div className="container">
          <Searchform  onSearch={this.search}/>
          <Nav />
          {/*If Loading is true - render the loading component, else load the other routes*/}
          {
          (this.state.loading)
          ? <Loading />
          : <Switch>
          <Route exact path="/"> <Redirect to="/cats" /> </Route>
          <Route path="/search/:query" render={() => <PhotoContainer data={this.state.photos} title={this.state.title} loading={this.state.loading} />} />
          <Route path="/cats" render={() => <PhotoContainer data={cats} title='cats' loading={this.state.loading} />} />
          <Route path="/dogs" render={() => <PhotoContainer data={dogs} title='dogs' loading={this.state.loading} />} />
          <Route path="/cows" render={() => <PhotoContainer data={cows} title='cows' loading={this.state.loading} />} />
          <Route render={() => <Error />} />
            </Switch>
          }

        </div>
      </BrowserRouter>
      
    )
  }
}