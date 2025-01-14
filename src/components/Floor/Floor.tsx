import {SFloor, SFloorInner} from './styles';
import {Button} from '@src/components/Button/Button';
import {StatusType} from '@src/components/Lift/Lift';
import {useState} from 'react';


export type FloorPropsType = {
    id?: number
    floor: number
    title: string
    height: number
    elevatorMovement: (floor: number) => void
    status: StatusType
}

export const Floor = (props: FloorPropsType) => {

    function onClickHandler(floor: number) {
        props.elevatorMovement(floor)

    }

    return (
        <SFloor height={props.height}>
            <SFloorInner>
                <>
                    {props.title}
                    {props.floor}
                </>

                <Button
                    disabled={props.status !== 'stop'}
                    onClick={() => {
                        onClickHandler(props.floor)
                    }}>кнопка
                </Button>
            </SFloorInner>
        </SFloor>
    )
}
