import styled from 'styled-components'

export const StyledSinglePhoto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    h2 {
        font-weight: bold;
        font-size: 22px;
        color: #f5f5f5
    };

    @media screen and (max-width: 800px)
    {
        img {
            width: 300px;
            height: 300px
        };

        h2 {
            font-size: 16px;
        }
    }
`

export const StyledButton = styled.div`
    display: flex;
    margin: 20px 0;
    align-items: center;
    justify-content: space-evenly;

    button {
        width: 100px;
        height: 35px;
        color: #450c2c;
        font-size: 20px;
        font-weight: bold;

        &:hover {
            cursor: pointer;
        }
    }

    @media screen and (max-width: 800px)
    {
        margin: 5px 0;

        button {
            width: 60px;
            height: 20px;
            font-size: 12px
        }
    }

`


