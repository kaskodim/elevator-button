import styled from 'styled-components';
import {FLOOR_HEIGHT} from '@src/constants';

import wall_texture from  '@src/images/wall_texture.jpg'

export const SFloor = styled.div`


    
    height: ${FLOOR_HEIGHT}px;
    font-size: 20px;
    outline: 5px solid #c13838;
    user-select: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: inset 0 4px 8px 3px #090909;
    // background-image: url(${wall_texture});
    // background-repeat: no-repeat; /* Не повторять изображение */
    // background-position: center; /* Центрировать изображение */
    // background-size: cover;
    z-index: 5;
`

export const ButtonArea = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`

export const SFloorInner = styled.div`
`