import {Container} from '../Container';
import {Floor} from '../Floor/Floor';
import {createFloors} from '@src/utils';
import {Lift} from '@src/components/Lift/Lift';
import {useState} from 'react';


const FLOOR_COUNT: number = 14;
const FLOOR_HEIGHT: number = 100;

export const NORMAL_ELEVATOR_SPEED: number = 1.5;
export const SLOW_ELEVATOR_SPEED: number = 2;


export const Elevator = () => {

    const floors = createFloors(FLOOR_COUNT)

    const [floorValueButton, setFloorValueButton] = useState(1);


    function elevatorMovement(floor: number) {

        setFloorValueButton(floor)

    }

    return (
        <Container>


            {floors.reverse().map((floor) => (
                <Floor key={floor.id}
                       floor={floor.floor}
                       title={'Этаж '}
                       height={FLOOR_HEIGHT}
                       elevatorMovement={elevatorMovement}
                />
            ))}

            <Lift floor={floorValueButton}
                  height={FLOOR_HEIGHT}

            />


        </Container>
    );
};

export default Elevator;