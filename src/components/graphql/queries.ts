import { gql } from "@apollo/client";

// Query to get the list of countries
export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      capital
      emoji
    }
  }
`;

// Query to get details of a specific country
export const GET_COUNTRY_DETAILS = gql`
  query GetCountryDetails($code: ID!) {
    country(code: $code) {
      code
      name
      emoji
      capital
      currencies
      languages {
        name
      }
    }
  }
`;