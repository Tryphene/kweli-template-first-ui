import axios, { AxiosRequestConfig } from 'axios';
// config
import { HOST_API } from '../config-global';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: HOST_API });

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosInstance.get(url, { ...config });

  return res.data;
};

// ----------------------------------------------------------------------

export const endpoints = {
    company: {
        getInfo: (companySlug: string) => `/${companySlug}`,
    },
    product: {
        getOneProduct: (companySlug: string, productSlug: string) => `/${companySlug}/products/${productSlug}`,
    },
    orders: {
        create: (companySlug: string) => `/${companySlug}/online-order`,
        view: (companySlug: string, orderRef: string) => `/${companySlug}/orders/${orderRef}`,
    }
}