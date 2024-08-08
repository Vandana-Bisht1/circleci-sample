import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams, useNavigate } from 'react-router-dom';
import { GET_COUNTRY_DETAILS } from './queries';
import './CountryDetail.css';

const CountryDetails: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_COUNTRY_DETAILS, {
    variables: { code },
  });

  if (loading) return <div className="country-detail-container"><p className='loading'>Loading...</p></div>;
  if (error) return <div className="country-detail-container"><p className='error'>Error: {error.message}</p></div>;

  const country = data.country;

  return (
    <div className="country-detail-container">
      <button onClick={() => navigate('/')}>Back to List</button>
      {country ? (
        <div>
          <h2>{country.name} {country.emoji}</h2>
          <p><strong>Capital:</strong> {country.capital}</p>
          <p><strong>Code:</strong> {country.code}</p>
          <p><strong>Languages:</strong> {country.languages.map((lang: any) => lang.name).join(', ')}</p>
          <p><strong>Currencies:</strong> {country.currencies.map((currency: any) => currency).join(', ')}</p>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default CountryDetails;