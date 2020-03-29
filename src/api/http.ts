import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://lab.isaaclin.cn/nCoV/api/"
});

export default httpClient;
