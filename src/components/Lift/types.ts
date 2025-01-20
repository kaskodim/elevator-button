import {CSSProperties} from 'styled-components';

export type TimingFunctionType = Extract<CSSProperties['transitionTimingFunction'],
    'linear' | 'ease-in' | 'ease-out' | 'ease-in-out'>

export type StatusType = 'stop' | 'stopping' | 'progress' | 'start';