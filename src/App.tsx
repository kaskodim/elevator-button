import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import {House} from '@src/components/House/House';

const App = () => (
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
        <House />
    </StyleSheetManager>
);


export default App;
