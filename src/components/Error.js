import React from 'react';
import styled from '@emotion/styled';

const ContenedorError = styled.p`
    background-color: #EC3535;
    width: 100%;
    color: #FFF;
    font-family: sans-serif;
    font-size: 1.1rem;
    text-align: center;
    padding: 10px;
`;

const Error = ({mensaje}) => ( 
    <ContenedorError>{mensaje}</ContenedorError>
)
 
export default Error;