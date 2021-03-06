import axios from "axios";

const api = axios.create({
<<<<<<< HEAD
  baseURL: "/api/batchlog",
});
=======
    baseURL: '/api/batchlog',
})
>>>>>>> b000c7cc387f06065e903ca3cf703dceabb9b4ca

export const insertBatchlog = (payload) => api.post(`/add`, payload);
export const getBatchlogById = (id, payload) =>
  api.get(`/getBatchlog/${id}`, payload);
export const getName = (id, payload) => api.get(`/getname/${id}`);
export const getBatchById = (id, payload) =>
  api.get(`/getBatch/${id}`, payload);
export const updateBacthById = (id, payload) =>
  api.put(`/update/${id}`, payload);
export const deleteBirdById = (id) => api.delete(`/delete/${id}`);
const apis = {
  insertBatchlog,
  getBatchlogById,
  getBatchById,
  getName,
  updateBacthById,
  deleteBirdById,
};

export default apis;
