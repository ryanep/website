import fetch from 'isomorphic-fetch';
import * as api from '@constants/api';

export const fetchPageData = async slug => {
  const response = await fetch(`${api.apiURL}/pages/?page=${slug}`);
  return response.json();
};

export const contactFormSubmit = async payload => {
  const response = await fetch(`${api.apiURL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...payload })
  });
  return response.json();
};
