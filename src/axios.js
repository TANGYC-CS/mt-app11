import axios from "axios";
axios.defaults.baseURL = "https://api.duyiedu.com"
axios.interceptors.request.use(function (config) {
  config.params = {
    ...config.params,
    appkey: "TANGYC_1590676462148"
  }
  return config;
}), function (error) {
  return Promise.reject(error)
}
export default axios