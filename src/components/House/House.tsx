import {Container} from '../Container';
import {Floor} from '../Floor/Floor';
import {createFloors} from '@src/utils';
import {Lift} from '@src/components/Lift/Lift';
import {useState} from 'react';
import {SHouse} from '@src/components/House/style';
import {FLOOR_COUNT} from '@src/constants';

export type FloorValueButtonType = {
    floor: number
    isPressed: boolean
}

export const House = () => {

    const [floorValueButton, setFloorValueButton] = useState<FloorValueButtonType>({floor: 1, isPressed: false});

    const floors = createFloors(FLOOR_COUNT)

    const onStartLift = (floor: number) => {
        setFloorValueButton(
            {...floorValueButton, floor: floor, isPressed: true}
        )
    }

    const onStopLift = () => {
        setFloorValueButton(
            {...floorValueButton, isPressed: false}
        )
    }

    return (
        <SHouse>
            <Container>
                {floors.map((f) => (
                        <Floor key={f.id}
                               floor={f.floor}
                               onStartLift={onStartLift}
                               isPressed={floorValueButton.floor === f.floor && floorValueButton.isPressed}
                        />
                    )
                )}

                <Lift floorValueButton={floorValueButton}
                      onStopLift={onStopLift}
                />
            </Container>
        </SHouse>
    );
};






