import axios from "axios";

const http = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? process.env.API_DEV_BaseUrl
      : process.env.API_PROD_BaseUrl,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Change request data/error here
// http.interceptors.request.use(async (config) => {
//   try {
//     return config;
//   } catch (error) {
//     console.log("interceptor error ==>", error);

//     return Promise.reject(error);
//   }
// });

export default http;
