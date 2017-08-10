import fetch from 'isomorphic-fetch';
import * as api from '@constants/api';

export const fetchPageData = async slug => {
  const response = await fetch(`${api.apiURL}/pages/?page=${slug}`);
  return response.json();
};

export const contactFormSubmit = async (name, subject, email, message) => {
  const response = await fetch(`${api.apiURL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      subject,
      email,
      message
    })
  });
  return response.json();
};
