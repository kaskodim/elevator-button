import {CSSProperties} from 'styled-components';

export type LiftLocationType = 'left' | 'right'

export type TimingFunctionType = Extract<CSSProperties['transitionTimingFunction'],
    'linear' | 'ease-in' | 'ease-out' | 'ease-in-out'>

export type StatusType = 'stop' | 'moving';

export type LiftPropsType = {
    floorValueButton: number
    onStopLift: (lift: LiftLocationType) => void
    liftLocation: LiftLocationType
}




