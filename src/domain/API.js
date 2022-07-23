import _ from "lodash";
import request from "../utils/request";
const base_URL = "https://servercatalog.techartsyindonesia.com/catalog/";

const urls = {
  get_testimony: "testimony",
  post_testimony: "testimony",
};

const callAPI = (endpoint, method, headers = {}, params = {}, data = {}) => {
  const options = {
    baseURL: base_URL,
    url: endpoint,
    method,
    headers,
    data,
    params,
  };

  return request(options).then((response) => {
    const responseAPI = response.data && response.data.data;
    return responseAPI;
  });
};

export const getAllTestimony = () => {
  return callAPI(urls.get_testimony, "get", {}, {});
};

export const postTestimony = (payload) => {
  return callAPI(urls.post_testimony, "post", {}, {}, payload);
};
