import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, flag, capital, population, region } = props.country;
    console.log(props.country)
    return (
        <div className="country bg-light" >
            <h4 className="text-danger"> This is : {name} </h4>
            <img style={{ width: '200px' }} src={flag} alt="" />
            <p> <small> Region: {region} </small> </p>
            <h6> Capital: {capital}</h6>
            <p>Population: {population} </p>
        </div>
    );
};

export default Country;