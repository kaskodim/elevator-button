import styled from 'styled-components';
import wall_texture from '@src/images/wall_texture.webp'

export const SHouse = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    position: relative;
    
    background-image: url(${wall_texture});
`
