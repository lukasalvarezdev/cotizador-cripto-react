import React from 'react';
import styled from '@emotion/styled';

const ContenedorCotizacion = styled.div`
    font-family: sans-serif;
    background-color: white;
    padding: 1rem;
    text-align: center;
    margin-top: 1rem;
    border-radius: 10px;
`;

const ResConenedorPrecio = styled.p`
    font-family: sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
`;

const ResPrecio = styled.span`
    font-size: 1.4rem;
`;

const Cotizacion = ({resultado}) => {

    if (Object.keys(resultado).length === 0) return null;

    return (
        <ContenedorCotizacion>
            <img src={`https://www.cryptocompare.com/${resultado.IMAGEURL}`} alt="imagen-crypto" />
            <ResConenedorPrecio>
                El precio del {resultado.FROMSYMBOL} es de: <ResPrecio>{resultado.PRICE}</ResPrecio>
            </ResConenedorPrecio>
            <p><b>El precio más bajo del día fue: </b>{resultado.LOWHDAY}</p>
            <p><b>El precio más alto del día fue: </b>{resultado.HIGHDAY}</p>
            <p><b>La variación del último día fue: % </b>{resultado.CHANGEPCT24HOUR}</p>
            <p><b>Última actualización: </b>{resultado.LASTUPDATE}</p>
        </ContenedorCotizacion> 
    );
}
 
export default Cotizacion;