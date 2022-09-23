import React from 'react';
import './Country.css'


const Country = (props) => {

   const {name, capital, area} = props.country;
   return (
      <div className='countryStyle'>
         <h3>Name : {name.common}</h3>
         <h5>Capital : {capital}</h5>
         <p>Area : {area}</p>
         
      </div>
   );
};

export default Country;