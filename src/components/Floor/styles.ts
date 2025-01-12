import styled from 'styled-components';

export const SFloor = styled.div<{ height: number }>`
    display: flex;
    width: 100%;
    height: ${props => (props.height + 'px')};
    justify-content: center;
    align-items: center;
    font-size: 20px;
    outline: 1px solid #c13838;
    box-shadow: inset 0 0 7px #090909;
    user-select: none;
    position: relative;
    z-index: 22;

`

export const SFloorInner = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    //justify-content: space-around;
`