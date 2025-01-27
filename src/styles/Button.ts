import styled, {css} from 'styled-components';

const activeColor = `#53CD53FF`

const pressed = css`
    &:after {
        content: '';
        border: 2px solid ${activeColor};
        box-shadow: 0 0 5px ${activeColor},
        inset 0 1px 0 rgba(255, 255, 255, 0.3),
        inset 0 -5px 5px rgba(100, 100, 100, 0.1),
        inset 0 5px 5px rgba(255, 255, 255, 0.3);
    }
    &:before {
        box-shadow: inset 0 0 9px 0 ${activeColor},
        0 0 9px 0 ${activeColor};
        background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(56,158,40,1) 77%);
    }
`

export const Button = styled.button<{ isPressed: boolean }>`
    position: absolute;
    width: 4em;
    height: 4em;
    left: 50%;
    bottom: 15px;
    transform: translateX(-50%);
    border-radius: 50%;
    background: linear-gradient(#ccc, #fff);
    z-index: -1;
    border: 1px solid #939393;
    
    &:after {
        content: "";
        position: absolute;
        width: 3em;
        height: 3em;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background: #eaeaea;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.25),
        inset 0 1px 0 rgba(255, 255, 255, 0.3),
        inset 0 -5px 5px rgba(100, 100, 100, 0.1),
        inset 0 5px 5px rgba(255, 255, 255, 0.3);
        border: 0.1em solid rgb(142, 142, 142);
        z-index: 1;
    }
    
    &:before {
        content: "";
        position: absolute;
        width: 0.7em;
        height: 0.7em;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background: #c8c8c8;
        box-shadow: inset 0 0 1px 0 rgb(111 111 111 / 74%);;
        z-index: 2;
    }

    &:active {
        &:after {
            width: 2.95em;
            height: 2.95em;
        }

        &:before {
            width: 0.65em;
            height: 0.65em;
        }
    }
    
    ${props => props.isPressed ? pressed : ''}
`