import {SFloor, SFloorInner} from './styles';
import {Button} from '@src/styles/Button';

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
                {'ЭТАЖ '}
                {props.floor}
            </SFloorInner>

            <Button
                onClick={onclickHandler}
                isPressed={props.isPressed}
            />
        </SFloor>
    )
}




