import {Container} from '@src/styles/Container';
import {Floor} from '../Floor/Floor';
import {createFloors} from '@src/utils';
import {Lift} from '@src/components/Lift/Lift';
import {useEffect, useState} from 'react';
import {SHouse} from '@src/components/House/styles';
import {FLOOR_COUNT} from '@src/constants';

export type FloorValueButtonType = {
    floor: number
    isPressed: boolean
}

export const House = () => {

    const [queue, setQueue] = useState<FloorValueButtonType[]>([]);
    const [floorValueButton, setFloorValueButton] = useState<FloorValueButtonType>({floor: 1, isPressed: false});
    const [liftInMotion, setLiftInMotion] = useState<boolean>(false)

    const floors = createFloors(FLOOR_COUNT)

    const changeLiftInMotion = (liftInMotion: boolean) => {
        setLiftInMotion(liftInMotion)
    }

    const addQueue = (floor: number) => {
        const newFloorValue = {floor: floor, isPressed: true}
        setQueue(queue.length === 0 ? [newFloorValue] : [...queue, newFloorValue]);
    }

    useEffect(() => {

            if (liftInMotion || queue.length === 0) {
            } else if (!liftInMotion) {
                setFloorValueButton(queue[0])
                if (queue[0] === floorValueButton) {
                    setQueue([...queue].slice(1))
                }
            }
        }, [floorValueButton, queue, liftInMotion]
    )
    const onStopLift = () => {
        console.log('я пока бесполезная функция, но могу сказать что он там доехал')
    }


    return (
        <SHouse>
            <Container>
                {floors.map((f) => (
                        <Floor key={f.id}
                               floor={f.floor}
                               addQueue={addQueue}
                               isPressed={false}
                               queue={queue}
                        />
                    )
                )}

                <Lift liftLocation={'one'}
                      floorValueButton={floorValueButton}
                      onStopLift={onStopLift}
                      changeLiftInMotion={changeLiftInMotion}
                      liftInMotion={liftInMotion}

                />
            </Container>
        </SHouse>
    );
};







