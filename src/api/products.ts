import axios, { AxiosResponse } from 'axios';
import { Product } from '../types/Product';
import { Category } from '../types/Category';

const instance = axios.create({
  baseURL: 'http://localhost:3005',
  timeout: 10000,
});

export async function getProducts(
  sort?: string,
  limit?: number,
): Promise<Product[]> {
  const result = await instance
    .get(`/products`, { params: { sort, limit } })
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });

  return result;
}

export async function getCategories(): Promise<Category[]> {
  const result = await instance
    .get('/categories')
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });

  return result;
}

export async function getCategoryByCatId(catId: string) {
  const result = instance
    .get(`/categories/${catId}`)
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });

  return result;
}

export async function getProductsByCatId(catId: string) {
  const result = instance
    .get(`/products/${catId}`)
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });

  return result;
}

export async function getProductByProdId(
  catId: string | undefined,
  prodId: string | undefined,
) {
  if (catId || prodId) {
    const result = instance
      .get(`/products/${catId}/${prodId}`)
      .then((response: AxiosResponse) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });

    return result;
  }
}
