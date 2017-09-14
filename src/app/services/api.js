import fetch from 'isomorphic-fetch';

export const fetchPageData = async slug => {
  const response = await fetch(`${process.env.API_URL}/pages/?page=${slug}`);
  return response.json();
};

export const contactFormSubmit = async payload => {
  const response = await fetch(`${process.env.API_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...payload })
  });
  return response.json();
};
