import React, { Fragment } from 'react';
import './Spinner.css';

const Spinner = () => ( 
    <Fragment>
        <div class="sk-chase">
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
        </div>
    </Fragment>
);
 
export default Spinner;