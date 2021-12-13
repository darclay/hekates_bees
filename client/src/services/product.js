import api from './apiConfig.js';

export const getProducts = async () => {
  const response = await api.get('/products');
  return response.data;
}
export const getProduct = async (id) => {
  const resp = await api.get(`/products/${id}`);
  return resp.data;
}

export const createProduct = async (formData) => {
      const response = await api.post('/products', { product: formData })
      return response.data;
}

export const putProduct = async (id, data) => {
  const resp = await api.put(`/products/${id}`, { product: data });
  return resp.data;
};

export const deleteProduct = async (id) => {
  await api.delete(`/products/${id}`);
};