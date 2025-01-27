import styled from 'styled-components';
import {MAX_MOBILE_WIDTH} from '@src/constants';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 40px;
    cursor: default;
    
    @media (max-width: ${MAX_MOBILE_WIDTH}px) {
        margin: 10px;
    }
`