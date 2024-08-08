import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Countries from './components/graphql/Countries';
import CountryDetails from './components/graphql/CountryDetail';


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/country/:code" element={<CountryDetails />} />
      </Routes>
    </div>
  )
}

export default AllRoutes