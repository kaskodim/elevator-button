import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 40px;
    cursor: default;
    
    @media (max-width: 768px) {
        margin: 10px;
    }
`