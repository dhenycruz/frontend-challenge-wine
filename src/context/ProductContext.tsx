import React, {
  createContext, ReactNode, useMemo, useEffect, useState,
} from 'react';
import { Product, ReturnProducts } from '../interfaces/interfaces';
import { getProducts } from '../services/APIREQUEST';

type Props = { children: ReactNode };

interface IProductContext {
  // eslint-disable-next-line no-unused-vars
  fetchProducts(page: number): Promise<void>,
  products: Product[],
  totalProducts: number,
  pages: number,
  cart: Product[],
  // eslint-disable-next-line no-unused-vars
  setCart(param: Product[]): void,
}

export const ProductContext = createContext<IProductContext>({} as IProductContext);

export const ProductProvider = ({ children }: Props) => {
  const [products, setProducts] = useState([] as Product[]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [pages, setTotalPages] = useState(0);
  const [cart, setCart] = useState([] as Product[]);

  const fetchProducts = async (page = 1): Promise<void> => {
    const { items, totalItems, totalPages }: ReturnProducts = await getProducts(page);
    setProducts(items);
    setTotalProducts(totalItems);
    setTotalPages(totalPages);
  };

  const values = useMemo(() => ({
    fetchProducts,
    products,
    totalProducts,
    pages,
    setCart,
    cart,
  }), [fetchProducts]);

  useEffect(() => { fetchProducts(1); }, []);
  return (
    <ProductContext.Provider value={values}>
      {children}
    </ProductContext.Provider>
  );
};
