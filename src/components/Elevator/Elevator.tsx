import {Container} from '../Container';
import {Floor} from '../Floor/Floor';
import {createFloors} from '@src/utils';

const FLOOR_COUNT = 9;
const FLOOR_HEIGHT = '100px';



export const Elevator = () => {
    const floors = createFloors(FLOOR_COUNT)


    return (
        <Container>
            {floors.reverse().map((floor) => (
                <Floor key={floor.id}
                       floor={floor.floor}
                       title={'Этаж '}
                       height={FLOOR_HEIGHT}
                />
            ))}


            {/*<Lift floor={1}/>*/}
            {/*FOR СТОЛЬКО РАЗ - FLOOR_COUNT*/}

        </Container>
    );
};

export default Elevator;