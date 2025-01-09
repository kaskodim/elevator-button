import styled from 'styled-components';

import React from 'react';

export type LiftPropsType = {
    floor: 1 | 2 | 3 | 4

}

/**
 * 1. знает о том, где он,
 * 2. знать цель - дает кто-то извне
 * 3. кто-то должен знать, что цель достигнута - проп-функция, которую вызовет лифт, когда приехал
 *
 *
 *
 * Лифт, если был на 1 и ему дали цель на 5, то он должен итерационно ехать.
 * значит, лифт использует таймер - время прохода 1 этажа, и может перемещаться только на 1 этаж вверх/вниз
 *
 *
 * */
export const Lift = (props: LiftPropsType) => {


    return (
        <SLift floor={props.floor}/>


    );
};


// завязаться на переменную для height И switch
const FLOOR_HEIGHT = '80px';

// тоже вынести
const SLift = styled.div<LiftPropsType>`
    width: 50px;
    height: 80px;
    margin-left: 10px;
    outline: 1px solid red;
    background-color: chocolate;

    position: relative;

    
    // SWITCH НЕ НУЖЕН, УМНОЖАЕМ ВЫСОТУ НА ЭТАЖ
    top: ${(props2) => {

        switch (props2.floor) {
            // нет 1 этажа
            case 2: return '80px'
            case 3: return '160px'
            case 4: return '240px'
               
        }
    }};
    transition: top 1s ease-in-out;
`
