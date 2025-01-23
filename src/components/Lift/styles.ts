import styled, {css} from 'styled-components';
import liftImage from '@src/images/lift_image.png'
import {FLOOR_HEIGHT} from '@src/constants';
import {LiftLocationType, StatusType, TimingFunctionType} from '@src/components/Lift/types';

export type SLiftPropsType = {
    floor: number
    speed: number
    timingFunction: TimingFunctionType
    status: StatusType
    liftLocation: LiftLocationType
}

const leftLift = css`
    left: 0;
    margin-left: 15px;
`
const rightLift = css`
    right: 0;
    margin-right: 15px;
`

export const SLift = styled.div<SLiftPropsType>`
    ${props => props.liftLocation === 'left' ? leftLift : rightLift};

    width: 70px;
    height: ${FLOOR_HEIGHT}px;
    background-color: ${(st) => st.status === 'stop' ? 'yellow' : '#53CD53FF'};
    background-image: url(${liftImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: absolute;
    box-shadow: inset 0 0 20px 4px #090909;
    bottom: ${props => ((FLOOR_HEIGHT * props.floor) - FLOOR_HEIGHT + 'px')};
    transition: bottom ${(props) => props.speed}s ${(props) => props.timingFunction};

`