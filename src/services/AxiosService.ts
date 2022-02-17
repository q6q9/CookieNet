import axios from "axios";

export default class AxiosService {
  init(): void {
    axios.defaults.headers.common["Accept"] = "application/json";
    axios.defaults.baseURL = import.meta.env.VITE_API_URL;
    axios.defaults.withCredentials = false;
    axios.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        if (error.response.data) {
          if (error.response.status === 422) alert(error.response.data.message);
          // else if (error.response.status === 401) Router.push("/login");
        }
        return Promise.reject(error);
      }
    );
  }
}
