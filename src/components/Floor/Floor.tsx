import {SFloor} from './styles';
import {Button} from '@src/styles/Button';

export type FloorPropsType = {
    floor: number
    isPressed: boolean
    addQueue: () => void
}

export const Floor = (props: FloorPropsType) => {
    const onclickHandler = () => {
        // isp? return
        props.addQueue()
    }

    return (
        <SFloor>
                {'ЭТАЖ '}
                {props.floor}
            <Button
                onClick={onclickHandler}
                isPressed={props.isPressed}
            />
        </SFloor>
    )
}
