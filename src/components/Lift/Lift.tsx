import React, {useEffect, useState} from 'react';
import {SLift} from '@src/components/Lift/styles';
import {DELAYED_START, FloorValueButtonType, NORMAL_SPEED, SLOW_SPEED, VERY_SLOW_SPEED} from '@src/components/House/House';


export type LiftPropsType = {
    floor: FloorValueButtonType
    height: number
    stopColorLift: (isPressed: boolean) => void
}

type TimingFunctionType = 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
export type StatusType = 'stop' | 'stopping' | 'progress' | 'start';

export const Lift = (props: LiftPropsType) => {

    const [status, setStatus] = useState<StatusType>('stop');
    const [currentFloor, setCurrentFloor] = React.useState<number>(1)
    const [speed, setSpeed] = React.useState(SLOW_SPEED)
    const [timingFunction, setTimingFunction] = React.useState<TimingFunctionType>('ease-in');

    const moveLift = (cF: number, delay: number) => {


        if (cF === props.floor.floor) {
            setStatus('stop')
            setSpeed(SLOW_SPEED)
            setTimingFunction('ease-in')
            setCurrentFloor(cF)
            props.stopColorLift(false)

        } else {

            if (cF < props.floor.floor) {

                setTimeout(() => {
                    if (cF + 2 === props.floor.floor) {
                        setStatus('stopping')
                        setSpeed(SLOW_SPEED)
                        setTimingFunction('ease-out')
                        moveLift(cF + 1, SLOW_SPEED,);

                    } else {
                        setStatus('progress')
                        setSpeed(NORMAL_SPEED)
                        setTimingFunction('linear')
                        moveLift(cF + 1, NORMAL_SPEED);
                    }
                }, delay * 1000)
                setCurrentFloor(cF + 1)
            }

            // down
            if (cF > props.floor.floor) {
                setTimeout(() => {

                    if (cF - 2 === props.floor.floor) {
                        setStatus('stopping')
                        setSpeed(SLOW_SPEED)
                        setTimingFunction('ease-out')
                        moveLift(cF - 1, SLOW_SPEED);
                    } else {
                        setStatus('progress')
                        setSpeed(NORMAL_SPEED)
                        setTimingFunction('linear')
                        moveLift(cF - 1, NORMAL_SPEED);
                    }
                }, delay * 1000)
                setCurrentFloor(cF - 1)
            }
        }

    }

    useEffect(() => {


        if (currentFloor === props.floor.floor) {
            console.log('mount')
        } else {
            setStatus('start')

            const customAnimation = Math.abs(currentFloor - props.floor.floor) !== 1;

            setTimeout(() => {

                if (customAnimation) {
                    setTimingFunction('ease-in')
                    setSpeed(SLOW_SPEED)
                    moveLift(currentFloor, speed);

                } else {
                    setTimingFunction('ease-in-out')
                    setSpeed(VERY_SLOW_SPEED)
                    moveLift(currentFloor, VERY_SLOW_SPEED);
                }
            }, DELAYED_START)
        }


    }, [props.floor])
    return (
        <SLift
            status={status}
            floor={currentFloor}
            height={props.height}
            speed={speed}
            timingFunction={timingFunction}

        />
    );
};






