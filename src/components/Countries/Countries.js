
import React, { useState, useEffect } from 'react';

import Country from './Country/Country';
import './Country/Country.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])


    return (
        <div>
            <h1> Hello World With All Countries: {countries.length}</h1>
            <div className="countries-container">
                {
                    countries.map(country => console.log(country))
                }


                {
                    countries.map(country => <Country key={country.timezones} country={country}> </Country>)

                }
            </div>
        </div>
    );
};



export default Countries;