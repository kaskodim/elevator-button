import React, {useEffect, useState} from 'react';
import {SLift, SLiftPropsType} from '@src/components/Lift/styles';
import {NORMAL_ELEVATOR_SPEED, SLOW_ELEVATOR_SPEED} from '@src/components/Elevator/Elevator';


export type LiftPropsType = Pick<SLiftPropsType, 'height' | 'floor'>

type timingFunctionType = 'linear' | 'ease-in' | 'ease-out' | 'ease-in-linear';


export const Lift = (props: LiftPropsType) => {

        const [status, setStatus] = useState('stop');
        const [currentFloor, setCurrentFloor] = React.useState(1)
        const [speed, setSpeed] = React.useState(SLOW_ELEVATOR_SPEED)
        const [timingFunction, setTimingFunction] = React.useState<timingFunctionType>('ease-in');
        const [tempCurrentFloor, setTempCurrentFloor] = React.useState(1)

        console.log({status})
        console.log({timingFunction})


        const moveLift = (cF: number, delay: number) => {
            console.log({cF})


            if (cF === props.floor) {
                setCurrentFloor(cF)

                console.log('я все', cF)

                setStatus('stop')
                setSpeed(SLOW_ELEVATOR_SPEED)
                setTimingFunction('ease-in')
            } else {
                // вверх
                if (cF < props.floor) {

                    setTimeout(() => {
                        if (cF + 2 === props.floor) {
                            setStatus('stopping')
                            setSpeed(SLOW_ELEVATOR_SPEED)
                            setTimingFunction('ease-out')
                            moveLift(cF + 1, SLOW_ELEVATOR_SPEED);




                        } else {
                            setStatus('progress')
                            setSpeed(NORMAL_ELEVATOR_SPEED)
                            setTimingFunction('linear')
                            moveLift(cF + 1, NORMAL_ELEVATOR_SPEED);

                        }


                    }, delay * 1000)
                    setCurrentFloor(cF + 1)

                }

                // вниз
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
            setStatus('start')
            setTempCurrentFloor(currentFloor)
            moveLift(currentFloor, SLOW_ELEVATOR_SPEED)

        }, [props.floor])


        console.log({speed})
        return (
            <SLift
                status={status}
                floor={currentFloor}
                height={props.height}
                speed={speed}
                timingFunction={timingFunction}

            />
        );
    }
;


