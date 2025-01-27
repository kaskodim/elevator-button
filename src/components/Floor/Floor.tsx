import {SFloor, STitle} from './styles';
import {Button} from '@src/styles/Button';

export type FloorPropsType = {
    floor: number
    isPressed: boolean
    addQueue: () => void
}

export const Floor = (props: FloorPropsType) => {
    const onclickHandler = () => {

        props.addQueue()
    }

    return (
        <SFloor>
            <STitle>
                {'ЭТАЖ '}
                {props.floor}
            </STitle>
            <Button
                onClick={onclickHandler}
                isPressed={props.isPressed}
            />
        </SFloor>
    )
}
