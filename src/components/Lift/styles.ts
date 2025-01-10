import styled from 'styled-components';


export type SLiftPropsType = {
    floor: number
    height: number
    speed: number
}


export const SLift = styled.div<SLiftPropsType>`
    width: 70px;
    height: ${props => props.height + 'px'};
    margin-left: 5px;
    outline: 1px solid green;
    background-color: chocolate;
    position: absolute;
    
    
    
    bottom: ${props => ((props.height * props.floor) - props.height + 'px')};
    
    
    transition: bottom ${ (props)=> props.speed }s linear;
`