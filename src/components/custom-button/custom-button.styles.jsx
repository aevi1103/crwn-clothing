import styled, { css } from 'styled-components'

const invertedButtonStyles = css `
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`

const googleSignInStyles = css `
    background-color: #4285f4;
    color: white;

    &:hover {
      background-color: #357ae8;
      border: none;
    }
`

const buttonStyles = css `
    background-color: black;
    color: white;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`

const collectionPreviewStyles = css`
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;

    background-color: black;
    color: white;
    
`

const getButtonStyles = props => {

    if (props.isGoogleSignIn) {
        return googleSignInStyles
    } else if (props.isCollectionpreview) {
        return collectionPreviewStyles
    } else if (props.inverted) {
        return invertedButtonStyles;
    } else {
        return buttonStyles
    }

}

export const CustomButtonContainer = styled.button `
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder; 
    cursor: pointer;
    display: flex;
    justify-content: center;
    border: none;

    ${getButtonStyles}
`