import React, { Component } from 'react'
import Photos from './Photos'
import NotFound from './NotFound'

class PhotoContainer extends Component {
    render(){
        //Store the data that was passed from App.js in a constant
        const results = this.props.data;
        let photos;
        //Check if there's any results
        if(results.length > 0){
            //If there is any results - Create an array of 24 photo objects and passing data to the Photos component
            photos = results.map(photos => <Photos url={`https://live.staticflickr.com/${photos.server}/${photos.id}_${photos.secret}.jpg`} key={photos.id} alt={photos.title}/>);   
            //If there is no results - view the NotFound component
        } else {
            photos = <NotFound />
        }
    
        return(
            <div className="photo-container">
            <h2>{this.props.title}</h2>
            <ul>
                {photos}
            </ul>
            </div>
        )
    }
    
}

export default PhotoContainer;