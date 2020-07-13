import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';
import styled from '@emotion/styled';
import imagen from './cryptomonedas.png';
import axios from 'axios';

const Contenedor = styled.div`
	max-width: 900px;
	margin: 0 auto;

	@media (min-width: 992px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 2rem;
	}
`;

const Imagen = styled.img`
	max-width: 100%;
	margin-top: 5rem;
`;

const Heading = styled.h1`
	font-family: 'Bebas Neue', cursive;
	color: #ffffff;
	text-align: left;
	font-weight: 700;
	font-size: 50px;
	margin-bottom: 50px;
	margin-top: 80px;

	&:after {
		content: '';
		width: 100px;
		height: 6px;
		background-color: #66A2FE;
		display: block;
	}
`;

function App() {

	const [ moneda, guardarMoneda ] = useState('');
	const [ crypto, guardarCrypto ] = useState('');
	const [ resultado, guardarResultado ] = useState({});
	const [ cargando, guardarCargando ] = useState(false);

	useEffect( () => {
		// Prevenir la primera ejecucion
		if (moneda === '') return;

		// Llamar a la API
		const consultarAPI = async () => {
			const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${moneda}`;

			const res = await axios.get(url);

			// Mostrar el spinner
			guardarCargando(true);
			setTimeout(() => {
				guardarCargando(false);
				guardarResultado(res.data.DISPLAY[crypto][moneda]);
			}, 2000);
		}
		consultarAPI();

	},[moneda, crypto]);

	// Mostrar spinner o resultado
	let componente;
	if (cargando) {
		componente = <Spinner />;
	} else {
		componente = <Cotizacion resultado={resultado} />;
	}

	return (
		<Contenedor>
			<div>
				<Imagen
					src={imagen}
					alt="imagen-crypto"
				/>
			</div>
			<div>
				<Heading>Cotiza criptomonedas al instante</Heading>
				<Formulario
					guardarMoneda={guardarMoneda}
					guardarCrypto={guardarCrypto}
				/>
				{ componente }
			</div>
		</Contenedor>
	);
}

export default App;
