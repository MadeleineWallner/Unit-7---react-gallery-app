import React, { Component } from 'react'
import Photos from './Photos'
import NotFound from './NotFound'

class PhotoContainer extends Component {
    render(){
        const results = this.props.data;
        let photos;
        //if there's any results - show the photos. Else - show the not found message.
        if(results.length > 0){
            photos = results.map(photos => <Photos url={`https://live.staticflickr.com/${photos.server}/${photos.id}_${photos.secret}.jpg`} key={photos.id} alt={photos.title}/>);   
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