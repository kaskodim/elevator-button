import {SFloor} from './styles';
import {Button} from '@src/styles/Button';

export type FloorPropsType = {
    floor: number
    isPressed: boolean
    addQueue: (floor: number) => void
}

export const Floor = (props: FloorPropsType) => {
    const onclickHandler = () => {
        props.addQueue(props.floor)
    }

    return (
        <SFloor>
            <>
                {'ЭТАЖ '}
                {props.floor}
            </>

            <Button
                onClick={onclickHandler}
                isPressed={props.isPressed}
            />
        </SFloor>
    )
}
