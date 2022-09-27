import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3015/api",
  headers: {
    "Content-Type": "application/json",
  },
});

client.interceptors.response.use(
  ({ data }) => {
    return Promise.resolve(data);
  },
  (error) => {
    return Promise.reject(error.response.data);
  }
);

const api = {
  getDashboardCount: () => client.get("/schools/count"),
  registerSchool: (data) => client.post("/schools", data),
  viewSchool: (schoolId) => client.get(`/schools/:${schoolId}`),
  fetchAllSchools: () => client.get("/schools"),
  registerStudent: (schoolId, data) =>
    client.post(`/schools/:${schoolId}/students`, data),
  displayProfile: (uid) => client.get(`/users/:${uid}`),
};

export default api;
