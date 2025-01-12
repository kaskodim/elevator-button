import {SFloor, SFloorInner} from './styles';

export type FloorPropsType = {
    id?: number
    floor: number
    title: string
    height: number
    elevatorMovement: (floor: number) => void
}

export const Floor = (props: FloorPropsType) => {

    function onClickHandler(floor: number) {
        props.elevatorMovement(floor)
    }

    // console.log(props)
    // + логика на будущее
    return (
        <SFloor height={props.height}

        >
            <SFloorInner>
                <>
                    {props.title}
                    {props.floor}
                </>

                <button
                    onClick={() => {
                        onClickHandler(props.floor)
                    }}>кнопка
                </button>


            </SFloorInner>

        </SFloor>
    )
}
