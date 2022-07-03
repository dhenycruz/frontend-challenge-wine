import React, {
  createContext, ReactNode, useMemo, useEffect, useState,
} from 'react';
import { Product, ReturnProducts } from '../interfaces/interfaces';
import { getProducts } from '../services/APIREQUEST';

type Props = { children: ReactNode };

interface IProductContext {
  fetchProducts(): Promise<void>,
  products: Product[],
  totalProducts: number,
}

export const ProductContext = createContext<IProductContext>({} as IProductContext);

export const ProductProvider = ({ children }: Props) => {
  const [products, setProducts] = useState([] as Product[]);
  const [totalProducts, setTotalProducts] = useState(0);

  const fetchProducts = async (page = 1): Promise<void> => {
    const { items, totalItems }: ReturnProducts = await getProducts(page);
    setProducts(items);
    setTotalProducts(totalItems);
  };

  const values = useMemo(() => ({
    fetchProducts,
    products,
    totalProducts,
  }), [fetchProducts]);

  useEffect(() => { fetchProducts(1); }, []);
  return (
    <ProductContext.Provider value={values}>
      {children}
    </ProductContext.Provider>
  );
};
