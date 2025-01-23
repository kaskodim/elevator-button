import {SFloor} from './styles';
import {Button} from '@src/styles/Button';
import styled from 'styled-components';


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

const STitle = styled.div`

    font-size: 20px;

    color: #2b3c2b;
    //
    font-family: "Rubik 80s Fade", serif;
    font-weight: 400;
    font-style: normal;


    //background-color: red;
    text-shadow:  0 0 1px #000, 0 0 0 #000;
    margin-bottom: 10px;


`