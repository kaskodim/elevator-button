import React, {useEffect, useState} from 'react';
import {SLift} from '@src/components/Lift/styles';
import {DELAYED_START, NORMAL_SPEED, SLOW_SPEED, VERY_SLOW_SPEED} from '@src/constants';
import {LiftPropsType, StatusType, TimingFunctionType} from '@src/components/Lift/types';

export const Lift = (props: LiftPropsType) => {

    const [status, setStatus] = useState<StatusType>('stop');
    const [currentFloor, setCurrentFloor] = React.useState<number>(1)
    const [speed, setSpeed] = React.useState(SLOW_SPEED)
    const [timingFunction, setTimingFunction] = React.useState<TimingFunctionType>('ease-in');

    const moveLift = (floor: number, delay: number) => {

        if (floor === props.floorValueButton) {
            setStatus('stop')
            setSpeed(SLOW_SPEED)
            setTimingFunction('ease-in')
            setCurrentFloor(floor)
            props.onStopLift(props.liftLocation)

        } else {
            // UP
            if (floor < props.floorValueButton) {
                setTimeout(() => {
                    if (floor + 2 === props.floorValueButton) {
                        setSpeed(SLOW_SPEED)
                        setTimingFunction('ease-out')
                        moveLift(floor + 1, SLOW_SPEED,);
                    } else {
                        setSpeed(NORMAL_SPEED)
                        setTimingFunction('linear')
                        moveLift(floor + 1, NORMAL_SPEED);
                    }
                }, delay * 1000)
                setCurrentFloor(floor + 1)
            }
            // DOWN
            if (floor > props.floorValueButton) {
                setTimeout(() => {
                    if (floor - 2 === props.floorValueButton) {
                        setSpeed(SLOW_SPEED)
                        setTimingFunction('ease-out')
                        moveLift(floor - 1, SLOW_SPEED);
                    } else {
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
        if (currentFloor !== props.floorValueButton) {
            setStatus('moving')
            const isNeighboringFloor = Math.abs(currentFloor - props.floorValueButton) === 1;

            setTimeout(() => {
                if (!isNeighboringFloor) {
                    setTimingFunction('ease-in')
                    setSpeed(SLOW_SPEED)
                    moveLift(currentFloor, SLOW_SPEED);
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
            liftLocation={props.liftLocation}
        />
    );
};
