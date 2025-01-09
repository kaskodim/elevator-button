import {SFloor} from './styles';

type FloorPropsType = {
    id?: number
    floor: number
    title: string
    height: string
}

export const Floor = (props: FloorPropsType) => {
    // + логика на будущее
    return (
        <SFloor height={props.height}>
            {props.title}
            {props.floor}
        </SFloor>
    )
}
