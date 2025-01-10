import {Container} from '../Container';
import {Floor} from '../Floor/Floor';
import {createFloors} from '@src/utils';
import {Lift} from '@src/components/Lift/Lift';
import {useState} from 'react';


const FLOOR_COUNT: number = 10;
const FLOOR_HEIGHT: number = 100;

const DEFAULT_ELEVATOR_SPEED: number = 4;
const STARTING_ELEVATOR_SPEED: number = 1;
const FINISHING_ELEVATOR_SPEED: number = 1;


// default elevator speed
//
// starting speed of the elevator

// finishing speed of the elevator

export const Elevator = () => {

    const floors = createFloors(FLOOR_COUNT)


    // я тут

    // нужно
    const [floorValueButton, setFloorValueButton] = useState(1);


    function elevatorMovement(floor: number) {

        setFloorValueButton(floor)

    }


    // floor with elevator

    return (
        <Container>
            {floors.reverse().map((floor) => (
                <Floor key={floor.id}
                       floor={floor.floor}
                       title={'Э '}
                       height={FLOOR_HEIGHT}
                       elevatorMovement={elevatorMovement}
                />
            ))}


            <Lift floor={floorValueButton}
                  height={FLOOR_HEIGHT}
                  speed={DEFAULT_ELEVATOR_SPEED}

            />

        </Container>
    );
};

export default Elevator;