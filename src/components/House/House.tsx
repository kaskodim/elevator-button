import {Container} from '../Container';
import {Floor} from '../Floor/Floor';
import {createFloors} from '@src/utils';
import {Lift} from '@src/components/Lift/Lift';
import {useState} from 'react';

const FLOOR_NAME = 'ЭТАЖ '
const FLOOR_COUNT: number = 7;
const FLOOR_HEIGHT: number = 120;
const DEFAULT_SPEED = 1

export const NORMAL_SPEED: number = 1.2 / DEFAULT_SPEED;
export const SLOW_SPEED: number = 2 / DEFAULT_SPEED;
export const VERY_SLOW_SPEED: number = 4 / DEFAULT_SPEED;
export const DELAYED_START: number = 1000

export type FloorValueButtonType = {
    floor: number
    isPressed: boolean
}

export const House = () => {

    const [floorValueButton, setFloorValueButton] = useState<FloorValueButtonType>({floor: 1, isPressed: false});

    const floors = createFloors(FLOOR_COUNT)

    const transmitsFloorValue = (floor: number) => {
        setFloorValueButton(
            {...floorValueButton, floor: floor, isPressed: true}
        )
    }

    const transmitsElevatorStop = (isPressed: boolean) => {
        setFloorValueButton(
            {...floorValueButton, isPressed: isPressed}
        )
    }

    return (

        <Container>
            {floors.reverse().map((f) => (
                    <Floor key={f.id}
                           floor={f.floor}
                           title={FLOOR_NAME}
                           height={FLOOR_HEIGHT}
                           transmitsFloorValue={transmitsFloorValue}
                           isPressed={floorValueButton.floor === f.floor && floorValueButton.isPressed}
                    />
                )
            )}

            <Lift floor={floorValueButton}
                  height={FLOOR_HEIGHT}
                  stopColorLift={transmitsElevatorStop}
            />
        </Container>
    );
};






