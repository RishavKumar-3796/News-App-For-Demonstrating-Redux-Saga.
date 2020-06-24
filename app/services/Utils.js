import apisauce from 'apisauce';

export const apiConfig = baseURL =>
  apisauce.create({
    baseURL,
    timeout: 30000,
    headers: { 'Cache-Control': 'no-cache' }
  });


export const getError = (response) => {
  if (response?.data?.responseType === 'NETWORK_ERROR') {
    return 'Please check your internet connection';
  }
  if (['CONNECTION_ERROR', 'SERVER_ERROR'].includes(response?.data?.responseType)) {
    return 'Server is not available';
  }
  return response?.data?.message || 'Something went wrong!';
};