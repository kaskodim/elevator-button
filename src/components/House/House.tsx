import {Floor} from '../Floor/Floor';
import {createFloors} from '@src/utils';
import {Lift} from '@src/components/Lift/Lift';
import {useEffect, useState} from 'react';
import {SHouse} from '@src/components/House/styles';
import {FLOOR_COUNT} from '@src/constants';
import {RefreshButton} from '@src/components/RefreshButton/RefreshButton';
import {LiftLocationType} from '@src/components/Lift/types';
import {Wrapper} from '@src/styles/Wrapper';

type LiftInMotionType = {
    isLeftLiftMoving: boolean
    isRightLiftMoving: boolean
}

export const House = () => {

        const [queue, setQueue] = useState<number[]>([])
        const [targetLiftLeft, setTargetLiftLeft] = useState<number>(1)
        const [targetLiftRight, setTargetLiftRight] = useState<number>(1)
        const [liftsState, setLiftsState] = useState<LiftInMotionType>({isLeftLiftMoving: false, isRightLiftMoving: false})

        const floors = createFloors(FLOOR_COUNT)

        const getIsButtonPressed = (floor: number) => {

            const isFloorInQueue = queue.find(q => q === floor) !== undefined
            const isRightLiftMovingToFloor = liftsState.isRightLiftMoving && targetLiftRight === floor
            const isLeftLiftMovingToFloor = liftsState.isLeftLiftMoving && targetLiftLeft === floor

            return isFloorInQueue || isRightLiftMovingToFloor || isLeftLiftMovingToFloor
        }

        const addQueue = (floor: number) => {

            const floorNotInTargets = floor !== targetLiftLeft && floor !== targetLiftRight
            const floorNotInQueue = !queue.find(f => f === floor)

            // TODO: вернуть если будет нужно ИЛИ удалить, если нет багов
            //  if (floorNotInTargets && floorNotInQueue && queueCheck)
            // const queueCheck = !!queue.length || queue[0] !== floor

            if (floorNotInTargets && floorNotInQueue) {
                setQueue((prev) => [...prev, floor])
            }
        }

        const onStartLift = (liftType: LiftLocationType) => {
            liftType === 'left' ?
                setLiftsState((prev) => ({...prev, isLeftLiftMoving: true})) :
                setLiftsState((prev) => ({...prev, isRightLiftMoving: true}))
            liftType === 'left' ?
                setTargetLiftLeft(queue[0]) :
                setTargetLiftRight(queue[0])
            setQueue([...queue].slice(1))
        }

        const onStopLift = (liftLocation: LiftLocationType) => {
            liftLocation === 'left' ?
                setLiftsState((prev) => ({...prev, isLeftLiftMoving: false})) :
                setLiftsState((prev) => ({...prev, isRightLiftMoving: false}))
        }

        useEffect(() => {

                if (queue.length !== 0 && queue[0] !== undefined) {

                    // если едет только 1 лифт, тогда запускаем второй
                    if ((liftsState.isLeftLiftMoving && !liftsState.isRightLiftMoving) ||
                        (!liftsState.isLeftLiftMoving && liftsState.isRightLiftMoving)) {

                        !liftsState.isRightLiftMoving ? onStartLift('right') : onStartLift('left')
                    }

                    // если оба стоят, то условие с дистанцией; едет, который ближе
                    else if (!liftsState.isLeftLiftMoving && !liftsState.isRightLiftMoving) {

                        const differenceR = Math.abs(queue[0] - targetLiftRight)
                        const differenceL = Math.abs(queue[0] - targetLiftLeft)

                        differenceR <= differenceL ? onStartLift('right') : onStartLift('left')
                    }
                }
            }, [liftsState, targetLiftLeft, targetLiftRight, queue]
        )

        return (
            <Wrapper>
                <SHouse>
                    {floors.map((f) => (
                            <Floor key={f.id}
                                   floor={f.floor}
                                   addQueue={() => addQueue(f.floor)}
                                   isPressed={getIsButtonPressed(f.floor)}
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
                </SHouse>
                <RefreshButton/>
            </Wrapper>
        );
    }
;
