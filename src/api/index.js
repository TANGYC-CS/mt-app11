import axios from "@/axios.js";
var api = {
  searchSuggestList(params) {
    return axios.get("/api/meituan/header/searchHotWords.json", params)
  }
}
export default api;
