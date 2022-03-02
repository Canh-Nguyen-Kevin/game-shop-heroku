import axiosClient from "./axiosClient";

const productApi = {
  getAll: (params: any | undefined) => {
    const url = "/products";
    return axiosClient.get(url, { params });
  },
  get: (id: string | number) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
};

export default productApi;
