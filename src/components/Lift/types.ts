import {CSSProperties} from 'styled-components';

export type LiftPropsType = {
    floorValueButton: number
    onStopLift: (lift: string | undefined) => void
    liftLocation: 'left' | 'right'
}

export type TimingFunctionType = Extract<CSSProperties['transitionTimingFunction'],
    'linear' | 'ease-in' | 'ease-out' | 'ease-in-out'>

export type StatusType = 'stop' | 'start';

export type LiftLocationType = 'left' | 'right'

