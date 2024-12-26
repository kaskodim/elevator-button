import {Container} from './Container';
import {Floor} from './floor/Floor';
import {Lift} from './lift/Lift';

export const Elevator = () => {
    return (



<Container>
    <Lift floor = {4}/>
    <Floor/>
    <Floor/>
    <Floor/>
    <Floor/>
    <Floor/>
    <Floor/>
    <Floor/>
    <Floor/>
    <Floor/>
</Container>

    );
};

export default Elevator;