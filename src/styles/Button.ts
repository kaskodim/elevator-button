import styled, {css} from 'styled-components';

const notPressed = css`
    transition: all 0.2s ease-in-out;

`

const pressed = css`
    background: #86cd37;
    transition: all 0.2s ease-in-out;

    &::after {
        background: #7CE700;
        box-shadow: 0 0 9px 0 #7CE700,
        inset 0 1px 0 0 #7CE700;
    }

`

export const Button = styled.button<{ isPressed: boolean }>`
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    user-select: none;
    border-style: none;
    box-shadow: 0 0 4px 2px #00000096;
    background: rgba(0, 0, 255, 0.78);
    
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 38px;
        height: 38px;
        background: #7F9BAA;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.1s ease-in-out;
    }

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 6px;
        height: 6px;
        transform: translate(-50%, -50%);
        transition: all 0.3s ease-in-out;
        border-radius: 50%;
        background: #67676e;
        z-index: 100;
    }
    ${props => props.isPressed ? pressed : notPressed};
    
`








