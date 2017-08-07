import fetch from 'isomorphic-fetch';
import * as api from '@constants/api';

export const fetchPageData = async slug => {
  const response = await fetch(`${api.apiURL}/pages/?page=${slug}`);
  return response.json();
};
