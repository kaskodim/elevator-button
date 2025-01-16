import styled from 'styled-components';
import liftImage from '@src/images/lift_image.png'

export type SLiftPropsType = {
    floor: number
    height: number
    speed: number
    timingFunction: string
    status: string
}


export const SLift = styled.div<SLiftPropsType>`
    width: 70px;
    height: ${props => props.height + 'px'};
    margin-left: 15px;
    outline: 1px solid #53cd53;
    background-color: ${(st) => st.status === 'stop' ? 'yellow' : '#53CD53FF'};
    background-image: url(${liftImage});
    background-repeat: no-repeat; /* Не повторять изображение */
    background-position: center; /* Центрировать изображение */
    background-size: cover; /* Покрыть весь элемент изображением */
    position: absolute;
    box-shadow: inset 0 0 7px #090909;


    bottom: ${props => ((props.height * props.floor) - props.height + 'px')};


    transition: bottom ${(props) => props.speed}s ${(props) => props.timingFunction};

`