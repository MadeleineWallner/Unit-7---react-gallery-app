import axios from 'axios'
// import apiKey from './config.js';

// const api = apiKey;

const apiKey = process.env.apiKey;

let cats = {};
let dogs = {};
let cows = {};

//Getting the data for the 3 main topics

    axios(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
        cats = response.data.photos.photo
    }) 
    .catch(error => {
      console.log(error)
    })

    axios(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
        dogs = response.data.photos.photo
    }) 
    .catch(error => {
      console.log(error)
    })

    axios(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cows&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
        cows = response.data.photos.photo
    }) 
    .catch(error => {
      console.log(error)
    })


export {cats, dogs, cows}