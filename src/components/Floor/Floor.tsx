import {SFloor, SFloorInner} from './styles';
import {Button} from '@src/styles/Button';
import {FloorValueButtonType} from '@src/components/House/House';

export type FloorPropsType = {
    floor: number
    isPressed: boolean
    addQueue: (floor: number) => void
    queue: FloorValueButtonType[]
}

export const Floor = (props: FloorPropsType) => {

    const onclickHandler = () => {
        props.addQueue(props.floor)

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




