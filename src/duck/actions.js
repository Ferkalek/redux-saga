export const REQUEST_API_DATA = 'REQUEST_API_DATA';
export const RECIVE_API_DATA = 'RECIVE_API_DATA';

export const requestApiDataAction = () => ({ type: REQUEST_API_DATA });
export const reciveApiDataAction = data => ({ type: RECIVE_API_DATA, data });