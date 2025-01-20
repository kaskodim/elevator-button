import styled from 'styled-components';
import {FLOOR_HEIGHT} from '@src/constants';

export const SFloor = styled.div`
    
    height: ${FLOOR_HEIGHT}px;
    font-size: 20px;
    outline: 4px solid #c13838;
    box-shadow: inset 0 4px 8px 3px #090909;
    user-select: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 22;
    
`

export const SFloorInner = styled.div`
`