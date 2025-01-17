import {SFloor, SFloorInner} from './styles';
import {Button} from '@src/styles/Button/Button';
import {FLOOR_NAME} from '@src/constants';

export type FloorPropsType = {
    floor: number
    onStartLift: (floor: number) => void
    isPressed: boolean
}

export const Floor = (props: FloorPropsType) => {

    const onclickHandler = () => {
        props.onStartLift(props.floor)
    }

    return (
        <SFloor>
            <SFloorInner>
                {FLOOR_NAME}
                {props.floor}
            </SFloorInner>

            <Button
                onClick={onclickHandler}
                isPressed={props.isPressed}
            />
        </SFloor>
    )
}




