import React from 'react';
import { useSelector } from 'react-redux';

const Photo = ({photo}) => {
    const  { id, thumbnailUrl, title } = photo
    return (
        <div>
            <img 
                alt={`name ${title}`}
                src={thumbnailUrl}
            />
            <span>{id}</span>
        </div>
    )
}


const ImagesList = () => {
    const photosInfo = useSelector(state => state.images)

  return (
    <div>
        {photosInfo.map((photo) => {
            return <Photo key={photo.id} photo={photo} />
        })}
    </div>
  )
}

export default ImagesList