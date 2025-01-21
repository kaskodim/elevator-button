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

type LiftInMotionType = {
    leftLift: boolean
    rightLift: boolean
}

export const House = () => {
debugger
        const [queue, setQueue] = useState<FloorValueButtonType[]>([]);
        const [targetLiftLeft, setTargetLiftLeft] = useState<FloorValueButtonType>({floor: 1, isPressed: false});
        const [targetLiftRight, setTargetLiftRight] = useState<FloorValueButtonType>({floor: 1, isPressed: false});
        const [liftInMotion, setLiftInMotion] = useState<LiftInMotionType>({leftLift: false, rightLift: false});
        console.log('LEFT', liftInMotion.leftLift)
        console.log('RIGHT', liftInMotion.rightLift)
        console.log({queue})


        const floors = createFloors(FLOOR_COUNT)


        console.log(queue)


        const addQueue = (floor: number) => {
            const newFloorValue = {floor: floor, isPressed: true}

            setQueue(queue.length === 0 || queue[0].floor === newFloorValue.floor ? [newFloorValue] : [...queue, newFloorValue]);
        }

        useEffect(() => {

                if (queue.length !== 0 && queue[0] !== undefined) {
                    const differenceR = Math.abs(queue[0].floor - targetLiftRight.floor)
                    const differenceL = Math.abs(queue[0].floor - targetLiftLeft.floor)


                    // если оба лифта едут - ничего не делаем   !liftInMotion.rightLift && !liftInMotion.leftLift
                    if (liftInMotion.leftLift && liftInMotion.rightLift) {

                    }


                    // если едет только 1 лифт, тогда запускаем второй (на дистанцию не влияет условие)
                    else if ((liftInMotion.leftLift && !liftInMotion.rightLift) || (!liftInMotion.leftLift && liftInMotion.rightLift)) {

                        if (!liftInMotion.rightLift) {
                            console.log('правый')

                            setTargetLiftRight(queue[0])

                            setQueue([...queue].slice(1))
                            setLiftInMotion({...liftInMotion, rightLift: true})
                        } else if (!liftInMotion.leftLift) {
                            console.log('левый')

                            setTargetLiftLeft(queue[0])

                            setQueue([...queue].slice(1))
                            setLiftInMotion({...liftInMotion, leftLift: true})
                        }
                    }

                        // правый лифт должен ехать
                        // если он стоит и   ( левый лифт занят ИЛИ дистанция меньше или равна левому)


                        // правый лифт едет
                        // если он стоит и (  дистанция меньше или равна левому  )
                        // Не учтено, что дистанция не влиет, когда только 1 лифт стоит
                    //      RIGHT
                    else if (!liftInMotion.leftLift && !liftInMotion.rightLift) {

                        console.log('я в ELSE')

                        if (!liftInMotion.rightLift && differenceR <= differenceL) {

                            setTargetLiftRight(queue[0])
                            setQueue([...queue].slice(1))
                            setLiftInMotion({...liftInMotion, rightLift: true})

                        } else {

                            setTargetLiftLeft(queue[0])
                            setQueue([...queue].slice(1))
                            setLiftInMotion({...liftInMotion, leftLift: true})

                        }
                    }

                }


            }, [liftInMotion, targetLiftLeft, targetLiftRight, queue]
        )

        const onStopLift = (lift: string | undefined) => {



            console.log(lift)
            if (lift === undefined) {
                console.log('undefined')
            }

            if (lift === 'left') {
                console.log('ЛЕВЫЙ доехал')
                setLiftInMotion({ ...liftInMotion, leftLift: false });

            }
            if (lift === 'right') {
                console.log('ПРАВЫЙ доехал')
                setLiftInMotion({ ...liftInMotion, rightLift: false });

            }
        }


        return (
            <SHouse>
                <Container>
                    {floors.map((f) => (
                            <Floor key={f.id}
                                   floor={f.floor}
                                   addQueue={addQueue}
                                   isPressed={false}
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
            </SHouse>
        );
    }
;







