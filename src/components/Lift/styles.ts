import styled from 'styled-components';
import liftImage from '@src/images/lift_image.png'
import {FLOOR_HEIGHT} from '@src/constants';
import {StatusType, TimingFunctionType} from '@src/components/Lift/types';

export type SLiftPropsType = {
    floor: number
    speed: number
    timingFunction: TimingFunctionType
    status: StatusType
}

export const SLift = styled.div<SLiftPropsType>`
    width: 70px;
    height: ${FLOOR_HEIGHT}px;
    margin-left: 15px;
    outline: 1px solid #53cd53;
    background-color: ${(st) => st.status === 'stop' ? 'yellow' : '#53CD53FF'};
    background-image: url(${liftImage});
    background-repeat: no-repeat; 
    background-position: center;
    background-size: cover;
    position: absolute;
    box-shadow: inset 0 0 7px #090909;
    
    bottom: ${props => ((FLOOR_HEIGHT * props.floor) - FLOOR_HEIGHT + 'px')};
    
    transition: bottom ${(props) => props.speed}s ${(props) => props.timingFunction};

`