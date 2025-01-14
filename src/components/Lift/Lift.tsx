import React, {useEffect, useState} from 'react';
import {SLift, SLiftPropsType} from '@src/components/Lift/styles';
import {DELAYED_START, NORMAL_ELEVATOR_SPEED, SLOW_ELEVATOR_SPEED, VERY_SLOW_ELEVATOR_SPEED} from '@src/components/Elevator/Elevator';


export type LiftPropsType = Pick<SLiftPropsType, 'height' | 'floor'> & {
    transmitsStatus: (status: StatusType) => void
}


type TimingFunctionType = 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
export type StatusType = 'stop' | 'stopping' | 'progress' | 'start';


export const Lift = (props: LiftPropsType) => {

    const [status, setStatus] = useState<StatusType>('stop');
    const [currentFloor, setCurrentFloor] = React.useState<number>(1)
    const [speed, setSpeed] = React.useState(SLOW_ELEVATOR_SPEED)
    const [timingFunction, setTimingFunction] = React.useState<TimingFunctionType>('ease-in');

    props.transmitsStatus(status);

    const moveLift = (cF: number, delay: number) => {

        if (cF === props.floor) {
            setStatus('stop')
            setSpeed(SLOW_ELEVATOR_SPEED)
            setTimingFunction('ease-in')
            setCurrentFloor(cF)
        } else {

            if (cF < props.floor) {

                setTimeout(() => {
                    if (cF + 2 === props.floor) {
                        setStatus('stopping')
                        setSpeed(SLOW_ELEVATOR_SPEED)
                        setTimingFunction('ease-out')
                        moveLift(cF + 1, SLOW_ELEVATOR_SPEED,);

                    } else {
                        setStatus('progress')
                        setSpeed(NORMAL_ELEVATOR_SPEED)
                        setTimingFunction('linear')
                        moveLift(cF + 1, NORMAL_ELEVATOR_SPEED);
                    }
                }, delay * 1000)
                setCurrentFloor(cF + 1)
            }

            // down
            if (cF > props.floor) {
                setTimeout(() => {

                    if (cF - 2 === props.floor) {
                        setStatus('stopping')
                        setSpeed(SLOW_ELEVATOR_SPEED)
                        setTimingFunction('ease-out')
                        moveLift(cF - 1, SLOW_ELEVATOR_SPEED);
                    } else {
                        setStatus('progress')
                        setSpeed(NORMAL_ELEVATOR_SPEED)
                        setTimingFunction('linear')
                        moveLift(cF - 1, NORMAL_ELEVATOR_SPEED);
                    }
                }, delay * 1000)
                setCurrentFloor(cF - 1)
            }
        }
    }

    useEffect(() => {

        if (props.floor === 0) {
            console.log('mount')
        } else {
            setStatus('start')
            const customAnimation = Math.abs(currentFloor - props.floor) !== 1;

            setTimeout(() => {

                if (customAnimation) {
                    setTimingFunction('ease-in')
                    setSpeed(SLOW_ELEVATOR_SPEED)
                    moveLift(currentFloor, speed);

                } else {
                    setTimingFunction('ease-in-out')
                    setSpeed(VERY_SLOW_ELEVATOR_SPEED)
                    moveLift(currentFloor, VERY_SLOW_ELEVATOR_SPEED);
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


