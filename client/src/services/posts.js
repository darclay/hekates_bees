import api from './apiConfig.js';

export const getPosts = async () => {
  const response = await api.get('/posts');
  return response.data;
}
export const getPost = async (id) => {
  const resp = await api.get(`/posts/${id}`);
  return resp.data;
}

export const createPost = async (formData) => {
      const response = await api.post('/posts', { post: formData })
      return response.data;
}

export const putPost = async (id, data) => {
  const resp = await api.put(`/posts/${id}`, { post: data });
  return resp.data;
};

export const deletePost = async (id) => {
  await api.delete(`/posts/${id}`);
};