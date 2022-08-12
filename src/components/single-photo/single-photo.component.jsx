import React from 'react'
import { useSelector } from 'react-redux'
import { getImageById } from '../../reducers/imagesSlice'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { StyledSinglePhoto, StyledButton } from './single-photo.style'

const SinglePhoto = () => {
  const { imageId } = useParams()
  const navigate = useNavigate()
  const photo = useSelector((state) => getImageById(state, Number(imageId)))
  const  { id, url, title } = photo
  const lowest = id < 2
  const highest = id > 4999

  const nextStep = () => {
    navigate(`/image/${id + 1}`)
  }


  const prevStep = () => {
    navigate(`/image/${id - 1}`)
  }

  return (
    <>
      <StyledSinglePhoto id="single-photo">
        <h2>
          {title}
        </h2>
        <img
          alt={`name ${title}`}
          src={url}
        />
      </StyledSinglePhoto>
      <StyledButton id="navigation">
        <button id="back" onClick={prevStep} disabled={lowest}>Back</button>
        <button id="next" onClick={nextStep} disabled={highest}>Next</button>
      </StyledButton>
    </>
  )
}

export default SinglePhoto