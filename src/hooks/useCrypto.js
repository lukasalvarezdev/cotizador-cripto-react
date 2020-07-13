import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.1rem;

    &:focus {
        outline: none;
    }
    option:focus,
    option:hover {
        outline: none;
    }
`;

const useCrypto = (label, stateInicial, opciones) => {

    // State de nuestro custom hook
    const [ state, actualizarState ] = useState(stateInicial);



    const SelectCrypto = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={ e => actualizarState(e.target.value) }
                value={state}
            >
                <option value="">-- Selecciona una crypto --</option>
                {
                    opciones.map( opcion => (
                        <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
                    ))
                }
            </Select>
        </Fragment>
    );

    // Retornar state, interfaz y func que modifica el state
    return [ state, SelectCrypto, actualizarState ];

}

export default useCrypto;