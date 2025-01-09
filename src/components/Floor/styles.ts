import styled from 'styled-components';

export const SFloor = styled.div<{ height: string }>`
    display: flex;
    width: 100%;
    height: ${props => props.height};
    justify-content: center;
    align-items: center;
    font-size: 26px;
    outline: 1px solid red;
`