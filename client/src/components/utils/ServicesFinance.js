import axios from "axios";

const api = axios.create({
<<<<<<< HEAD
  baseURL: "/api/finance",
=======
  baseURL: "/api/finance"
>>>>>>> b000c7cc387f06065e903ca3cf703dceabb9b4ca
});

export const insertFinanceIn = (payload) => api.post(`/addPendapatan`, payload);
export const insertFinanceOut = (payload) =>
  api.post(`/addPengeluaran`, payload);
export const getAllBirds = () => api.get(`/getburung`);
export const getAllReports = () => api.get(`/get`);
export const getSaldo = () => api.get(`/getSaldo`);
export const getReportsById = (id) => api.get(`/getById/${id}`);
export const getBirdById = (id) => api.get(`/getBirdById/${id}`);
export const getReportsByIdMonth = (id) => api.get(`/getByMonth/${id}`);
export const updateBirdById = (id) => api.put(`/update/${id}`);
const apis = {
  insertFinanceIn,
  insertFinanceOut,
  getAllBirds,
  getAllReports,
  getSaldo,
  updateBirdById,
  getReportsById,
  getReportsByIdMonth,
  getBirdById,
};

export default apis;
