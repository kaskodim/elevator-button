import styled, {css} from 'styled-components';

const notPressed = css`
    box-shadow: 0 0 4px 0 #00000096;
    background: #D8CD6FFF;
    transition: all 0.2s ease-in-out;
`

const pressed = css`
    box-shadow: inset 0 1px 4px 3px #488600,
    0 1px 4px 3px #68b016;
    transition: all 0.2s ease-in-out;
`

export const Button = styled.button<{ isPressed: boolean }>`

    width: 25px;
    height: 25px;
    border-radius: 50%;
    user-select: none;
    background: #7CE700;
    border-style: none;

    ${props => props.isPressed ? pressed : notPressed} ;
`








