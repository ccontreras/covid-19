import axios from "axios";

const http = axios.create({
  baseURL: "https://lab.isaaclin.cn/nCoV/api/"
});

export default http;
