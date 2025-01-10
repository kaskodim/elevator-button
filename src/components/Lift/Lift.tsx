import React, {useEffect} from 'react';
import {SLift, SLiftPropsType} from '@src/components/Lift/styles';

export type LiftPropsType = SLiftPropsType & {}



export const Lift = (props: LiftPropsType) => {

    const [currentFloor, setCurrentFloor] = React.useState(1)
    const [speed, setSpeed] = React.useState(props.speed)


    const moveLift = (cF: number) => {
        console.log({cF})
        if (cF === props.floor) {
            console.log('я все', cF)
            return
        } else {
            if (cF < props.floor) {
                setCurrentFloor(cF + 1)
                setTimeout(() => {
                    moveLift(cF + 1)
                }, speed * 1000)
            }
            if (cF > props.floor) {
                setCurrentFloor(cF - 1)
                setTimeout(() => {
                    moveLift(cF - 1)
                }, speed * 1000)
            }
        }
    }

    useEffect(() => {
        moveLift(currentFloor)
    }, [props.floor])

    return (
        <SLift floor={currentFloor}
               height={props.height}
               speed={speed}/>
    );
};


