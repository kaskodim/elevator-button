import styled from 'styled-components';

export type SLiftPropsType = {
    floor: number
    height: number
    speed: number
    timingFunction: string
    status: string
}


export const SLift = styled.div<SLiftPropsType>`
    width: 70px;
    height: ${props => props.height + 'px'};
    margin-left: 5px;
    outline: 1px solid green;
    background-color: ${(st) => st.status === 'stop' ? 'yellow' : 'green'};
    position: absolute;
    box-shadow: inset 0 0 7px #090909;


    bottom: ${props => ((props.height * props.floor) - props.height + 'px')};


    transition: bottom ${(props) => props.speed}s ${(props) => props.timingFunction};

`