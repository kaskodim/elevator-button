import {Container} from '../Container';
import {Floor} from '../Floor/Floor';
import {createFloors} from '@src/utils';
import {Lift, StatusType} from '@src/components/Lift/Lift';
import {useState} from 'react';


const FLOOR_COUNT: number = 9;
const FLOOR_HEIGHT: number = 120;
const DEFAULT_SPEED = 1

export const NORMAL_ELEVATOR_SPEED: number = 1.2 / DEFAULT_SPEED;
export const SLOW_ELEVATOR_SPEED: number = 2 / DEFAULT_SPEED;
export const VERY_SLOW_ELEVATOR_SPEED: number = 4 / DEFAULT_SPEED;

export const DELAYED_START: number = 1000


export const Elevator = () => {

    const [status, setStatus] = useState<StatusType>('stop');


    const floors = createFloors(FLOOR_COUNT)

    const transmitsStatus = (st: StatusType) => {
        setStatus(st)
    }


    const [floorValueButton, setFloorValueButton] = useState<number>(0);


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
                       status={status}
                />
            ))}

            <Lift floor={floorValueButton}
                  height={FLOOR_HEIGHT}
                  transmitsStatus={transmitsStatus}
            />

        </Container>
    );
};

export default Elevator;