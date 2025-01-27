import styled from 'styled-components';
import {FLOOR_HEIGHT} from '@src/constants';

export const SFloor = styled.div`
    height: ${FLOOR_HEIGHT}px;
    outline: 8px solid #595753;
    border-radius: 2px;
    user-select: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: inset 0 4px 8px 3px #090909;
    z-index: 5;
    font-size: 10px;
`

export const STitle = styled.div`
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    color: #fafafa;
    font-family: "Rubik 80s Fade", serif;
    font-weight: 400;
    font-style: normal;
    text-shadow: 0 0 1px #ffffff;
    margin-top: 5px;
`
