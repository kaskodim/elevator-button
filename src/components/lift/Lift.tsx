import styled from 'styled-components';

import React from 'react';

export type LiftPropsType = {
    floor: 1 | 2 | 3 | 4

}


export const Lift = (props: LiftPropsType) => {


    return (
        <SLift floor={props.floor}/>


    );
};


const SLift = styled.div<LiftPropsType>`
    width: 50px;
    height: 80px;
    margin-left: 10px;
    outline: 1px solid red;
    background-color: chocolate;

    position: relative;

    top: ${props => {

        switch (props.floor) {
            case 2: return '80px'
            case 3: return '160px'
            case 4: return '240px'
               
        }
    }};
    transition: top 1s ease-in-out;
`
