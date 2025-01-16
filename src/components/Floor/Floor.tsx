import {SFloor, SFloorInner} from './styles';
import {Button} from '@src/components/Button/Button';

export type FloorPropsType = {
    floor: number
    title: string
    height: number
    transmitsFloorValue: (floor: number) => void
    isPressed: boolean
}

export const Floor = (props: FloorPropsType) => {

    const onclickHandler = () => {
        props.transmitsFloorValue(props.floor)
    }

    return (
        <SFloor height={props.height}>
                <SFloorInner>
                    {props.title}
                    {props.floor}
                </SFloorInner>

                <Button
                    onClick={onclickHandler}
                    isPressed={props.isPressed}
                />
        </SFloor>
    )
}




