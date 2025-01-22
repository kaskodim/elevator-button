import {Container} from '@src/styles/Container';
import {Floor} from '../Floor/Floor';
import {createFloors} from '@src/utils';
import {Lift} from '@src/components/Lift/Lift';
import {useEffect, useState} from 'react';
import {SHouse} from '@src/components/House/styles';
import {FLOOR_COUNT} from '@src/constants';
import {RefreshButton} from '@src/components/RefreshButton/RefreshButton';

type LiftInMotionType = {
    leftLift: boolean
    rightLift: boolean
}

export const House = () => {

        const [queue, setQueue] = useState<number[]>([])
        const [targetLiftLeft, setTargetLiftLeft] = useState<number>(1)
        const [targetLiftRight, setTargetLiftRight] = useState<number>(1)
        const [liftInMotion, setLiftInMotion] = useState<LiftInMotionType>({leftLift: false, rightLift: false})

        const floors = createFloors(FLOOR_COUNT)

        const changeButton = (floor: number) => {
            return (
                (queue.find(q => q === floor) !== undefined) ||
                ((liftInMotion.rightLift && targetLiftRight === floor) ||
                    ((liftInMotion.leftLift && targetLiftLeft === floor)))
            )
        }

        const addQueue = (floor: number) => {
            if (queue.find(f => f === floor)) return;
            setQueue(queue.length === 0 || queue[0] === floor ? [floor] : [...queue, floor]);
        }

        useEffect(() => {

                if (queue.length !== 0 && queue[0] !== undefined) {

                    const differenceR = Math.abs(queue[0] - targetLiftRight)
                    const differenceL = Math.abs(queue[0] - targetLiftLeft)

                    // удаляет дубляж целей в очереди
                    if (queue[0] === targetLiftRight || queue[0] === targetLiftLeft) {
                        setQueue([...queue].slice(1))
                        setLiftInMotion((prev) => ({...prev, rightLift: false, leftLift: false}))
                    }

                    // если едет только 1 лифт, тогда запускаем второй
                    else if ((liftInMotion.leftLift && !liftInMotion.rightLift) ||
                        (!liftInMotion.leftLift && liftInMotion.rightLift)) {

                        if (!liftInMotion.rightLift) {
                            setLiftInMotion((prev) => ({...prev, rightLift: true}))
                            setTargetLiftRight(queue[0])
                            setQueue([...queue].slice(1))

                        } else if (!liftInMotion.leftLift) {
                            setLiftInMotion((prev) => ({...prev, leftLift: true}))
                            setTargetLiftLeft(queue[0])
                            setQueue([...queue].slice(1))
                        }
                    }

                    // если оба стоят, то условие с дистанцией едет, который ближе
                    else if (!liftInMotion.leftLift && !liftInMotion.rightLift) {

                        if (differenceR <= differenceL) {
                            setLiftInMotion((prev) => ({...prev, rightLift: true}))
                            setTargetLiftRight(queue[0])
                            setQueue([...queue].slice(1))
                        } else {
                            setLiftInMotion((prev) => ({...prev, leftLift: true}))
                            setTargetLiftLeft(queue[0])
                            setQueue([...queue].slice(1))
                        }
                    }
                }
            }, [liftInMotion, targetLiftLeft, targetLiftRight, queue]
        )

        const onStopLift = (liftLocation: string | undefined) => {
            if (liftLocation !== undefined) {
                liftLocation === 'left' ?
                    setLiftInMotion((prev) => ({...prev, leftLift: false})) :
                    setLiftInMotion((prev) => ({...prev, rightLift: false}))
            }
        }

        return (
            <SHouse>
                <Container>
                    {floors.map((f) => (
                            <Floor key={f.id}
                                   floor={f.floor}
                                   addQueue={addQueue}
                                   isPressed={changeButton(f.floor)}
                            />
                        )
                    )}

                    <Lift liftLocation={'left'}
                          floorValueButton={targetLiftLeft}
                          onStopLift={onStopLift}
                    />

                    <Lift liftLocation={'right'}
                          floorValueButton={targetLiftRight}
                          onStopLift={onStopLift}
                    />
                </Container>
                <RefreshButton/>
            </SHouse>
        );
    }
;







