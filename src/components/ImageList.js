import React from 'react'
import './ImageList.css'
import ImageCard from './ImageCard'
const ImageList=(props)=>{
    const images=props.Images.map(i=> <ImageCard key={i.id} image={i} />)
    return(
        <div className="image-list">
           {images}
        </div>
    )
}
export default ImageList