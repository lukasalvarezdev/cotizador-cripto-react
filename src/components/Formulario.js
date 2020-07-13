import React, { useState, useEffect } from 'react';
import Error from './Error';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCrypto from '../hooks/useCrypto';
import axios from 'axios';

const BotonEnviar = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 15px;
    background-color: #66A2FE;
    border: none;
    width: 100%;
    border-radius: 5px;
    color: #FFF;
    cursor: pointer;
    transition: background-color .4s ease-in-out;

    &:hover {
        background-color: #326AC0;
    }
`;
const Formulario = ({guardarMoneda, guardarCrypto}) => {

    // Error
    const [ error, guardarError ] = useState(false);

    // state del listado de cryptos
    const [ listacrypto, guardarListaCrypto] = useState([]);

    const monedas = [
        { codigo: 'USD', nombre: 'Dolar Estadounidense' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'COP', nombre: 'Peso Colombiano' },
        { codigo: 'EUR', nombre: 'Euro' }
    ];

    const [ moneda , SelectMonedas ] = useMoneda('Elige tu moneda', '', monedas);

    const [ crypto , SelectCrypto ] = useCrypto('Elige tu criptomoneda', '', listacrypto);

    // Llamar a la API
    useEffect( () => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const res = await axios.get(url);
            
            const arrayMonedas = res.data.Data;
            guardarListaCrypto(arrayMonedas);
        }
        consultarAPI();
        
    }, []);

    const handleSubmit = e => {
        console.log('Hola')
        e.preventDefault();

        if (moneda.trim() === '' || crypto.trim() === '') {
            guardarError(true);
            return;
        }

        // pasar los datos al componente principal
        guardarError(false);
        guardarMoneda(moneda);
        guardarCrypto(crypto);
    }
    return ( 
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error mensaje="Hubo un error, todos los campos son obligatorios" /> : null}
            <SelectMonedas />
            <SelectCrypto />
            <BotonEnviar
                type="submit"
                value="Cotizar"
            />
        </form>
    );
}
 
export default Formulario;