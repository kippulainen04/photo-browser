import React from 'react';
import { useSelector } from 'react-redux';
import { getAllImages, getImagesError, getImagesStatus } from '../reducers/imagesSlice';
import { Container, PhotosArea, PhotosMedia, PhotosContent } from './photos-list.style';

const Photo = ({photo}) => {
    const  { id, thumbnailUrl, title } = photo
    return (
        <PhotosArea>
            <PhotosMedia>
                <img 
                    alt={`name ${title}`}
                    src={thumbnailUrl}
                />
            </PhotosMedia>
            <PhotosContent>
                {id}
            </PhotosContent>
        </PhotosArea>
    )
}


const PhotosList = () => {
    const photosInfo = useSelector(getAllImages)
    const photosStatus = useSelector(getImagesStatus)
    const photosError= useSelector(getImagesError)

    let fetchPhotos;
    photosStatus === 'loading'
    ? fetchPhotos = <p>loading photos...</p>
    : photosStatus === 'succeeded'
    ? fetchPhotos = <Container>{photosInfo.map((photo) => {
        return <Photo key={photo.id} photo={photo} />
    })}</Container>
    : fetchPhotos = <p>{photosError}</p>
    
  return (
    <>
        {fetchPhotos}
    </>
  )
}

export default PhotosList