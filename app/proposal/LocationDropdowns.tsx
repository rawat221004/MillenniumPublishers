import React, { useState } from 'react';

const LocationDropdowns = () => {
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  // Dummy data for countries, states, and cities
  const countries = ['USA', 'Canada', 'UK'];
  const states = {
    'USA': ['California', 'New York', 'Texas'],
    'Canada': ['Ontario', 'Quebec', 'British Columbia'],
    'UK': ['England', 'Scotland', 'Wales']
  };
  const cities = {
    'California': ['Los Angeles', 'San Francisco', 'San Diego'],
    'New York': ['New York City', 'Buffalo', 'Rochester'],
    'Texas': ['Houston', 'Dallas', 'Austin'],
    'Ontario': ['Toronto', 'Ottawa', 'Hamilton'],
    'Quebec': ['Montreal', 'Quebec City', 'Laval'],
    'British Columbia': ['Vancouver', 'Victoria', 'Kelowna'],
    'England': ['London', 'Manchester', 'Birmingham'],
    'Scotland': ['Glasgow', 'Edinburgh', 'Aberdeen'],
    'Wales': ['Cardiff', 'Swansea', 'Newport']
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setState('');
    setCity('');
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
    setCity('');
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <div className="space-y-2">
        <label htmlFor="country" className="text-sm">
          Country*
        </label>
        <select
          id="country"
          name="country"
          value={country}
          onChange={handleCountryChange}
          className="w-full border rounded-md p-2"
          required
        >
          <option value="">Select Country</option>
          {countries.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="state" className="text-sm">
          State*
        </label>
        <select
          id="state"
          name="state"
          value={state}
          onChange={handleStateChange}
          className="w-full border rounded-md p-2"
          required
          disabled={!country}
        >
          <option value="">Select State</option>
          {country && states[country] && states[country].map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="city" className="text-sm">
          City*
        </label>
        <select
          id="city"
          name="city"
          value={city}
          onChange={handleCityChange}
          className="w-full border rounded-md p-2"
          required
          disabled={!state}
        >
          <option value="">Select City</option>
          {state && cities[state] && cities[state].map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LocationDropdowns;
