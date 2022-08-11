import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomePage = styled.nav`
  font-size: 25px;
  font-weight: bold;
  font-family: 'GFS Didot', serif;
  span {
    padding: 10px;
  }

  &:hover {
        background: #450c2c;
        transform: translateY(10px);
        transition: transform 500ms ease-in-out;
        span {
          color: #f5f5f5;
        }
      }
`

const Header = styled.header`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: sticky;
  top: 0;
  background-color: #f5f5f5;
  color: #450c2c;
  margin-bottom: 15px;
  z-index: 999;
`

const Navigation = () => {""
  return (
    <Header>
        <h1>Photo Browser</h1>
        <HomePage>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/">
              <span>Home</span>
            </Link>
        </HomePage>
    </Header>
  )
}

export default Navigation