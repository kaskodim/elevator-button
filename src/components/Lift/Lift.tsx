import React, {useEffect, useState} from 'react';
import {SLift} from '@src/components/Lift/styles';
import {FloorValueButtonType} from '@src/components/House/House';
import {DELAYED_START, NORMAL_SPEED, SLOW_SPEED, VERY_SLOW_SPEED} from '@src/constants';
import {StatusType, TimingFunctionType} from '@src/components/Lift/@types';

type LiftPropsType = {
    floorValueButton: FloorValueButtonType
    onStopLift: () => void
}

export const Lift = (props: LiftPropsType) => {

    const [status, setStatus] = useState<StatusType>('stop');
    const [currentFloor, setCurrentFloor] = React.useState<number>(1)
    const [speed, setSpeed] = React.useState(SLOW_SPEED)
    const [timingFunction, setTimingFunction] = React.useState<TimingFunctionType>('ease-in');

    const moveLift = (floor: number, delay: number) => {

        if (floor === props.floorValueButton.floor) {
            setStatus('stop')
            setSpeed(SLOW_SPEED)
            setTimingFunction('ease-in')
            setCurrentFloor(floor)
            props.onStopLift()

        } else {

            if (floor < props.floorValueButton.floor) {

                setTimeout(() => {
                    if (floor + 2 === props.floorValueButton.floor) {
                        setStatus('stopping')
                        setSpeed(SLOW_SPEED)
                        setTimingFunction('ease-out')
                        moveLift(floor + 1, SLOW_SPEED,);

                    } else {
                        setStatus('progress')
                        setSpeed(NORMAL_SPEED)
                        setTimingFunction('linear')
                        moveLift(floor + 1, NORMAL_SPEED);
                    }
                }, delay * 1000)
                setCurrentFloor(floor + 1)
            }

            // down
            if (floor > props.floorValueButton.floor) {
                setTimeout(() => {

                    if (floor - 2 === props.floorValueButton.floor) {
                        setStatus('stopping')
                        setSpeed(SLOW_SPEED)
                        setTimingFunction('ease-out')
                        moveLift(floor - 1, SLOW_SPEED);
                    } else {
                        setStatus('progress')
                        setSpeed(NORMAL_SPEED)
                        setTimingFunction('linear')
                        moveLift(floor - 1, NORMAL_SPEED);
                    }
                }, delay * 1000)
                setCurrentFloor(floor - 1)
            }
        }

    }

    useEffect(() => {

        if (!(currentFloor === props.floorValueButton.floor)) {

            setStatus('start')
            const nextFloor = Math.abs(currentFloor - props.floorValueButton.floor) !== 1;

            setTimeout(() => {

                if (nextFloor) {
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
    }, [props.floorValueButton])
    return (
        <SLift
            status={status}
            floor={currentFloor}
            speed={speed}
            timingFunction={timingFunction}

        />
    );
};
