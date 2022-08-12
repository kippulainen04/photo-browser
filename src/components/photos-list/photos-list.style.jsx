import styled from 'styled-components'

export const PhotosMedia = styled.div`
  height: 100%;
  z-index: 1;
`

export const PhotosContent = styled.p`
  border: 2px solid black;
  width: 45px;
  height: 20px;
  border-radius: 10px;
  margin-top: 10px;
  font-weight: bold;
  color: #000000;
  background-color: #ffffff;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  justify-content: center;
  gap: 25px 30px;
  padding: 10px 20px;
`


export const PhotosArea = styled.div`
display: flex;
flex-direction: column;
justifiy-content: center;
align-items: center;
text-align: center;
padding: 10px;
border-radius: 5px;
box-shadow: -1px 10px 20px -10px whitesmoke;
cursor: pointer;
background: #f5f5f5;

&:hover {
    ${PhotosMedia} {
        transform: rotate(-360deg);
        transition: transform 500ms ease-in-out;
      }

    ${PhotosContent} {
        border-color: #000000;
        background-color: #000000;
        color: #ffffff
      }
}
`
