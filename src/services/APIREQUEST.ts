import axios from 'axios';
import { Response, ReturnProducts } from '../interfaces/interfaces';

export const getProducts = async (page: number): Promise <ReturnProducts> => {
  const { data } = await axios.get(`https://wine-back-test.herokuapp.com/products?page=${page}&limit=10`);
  return data;
};

export const getProductsByName = async (page: number, name: string): Promise <ReturnProducts> => {
  const response: Response = await axios.get(`https://wine-back-test.herokuapp.com/products?page=${page}&limit=10&name=${name}`);
  return response.data;
};
