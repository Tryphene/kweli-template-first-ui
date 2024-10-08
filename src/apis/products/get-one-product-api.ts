import { useQuery } from '@tanstack/react-query';
import axios, { endpoints } from '../../utils/axios';

export const getOneProduct = async (params: { companySlug: string, productSlug: string }) => {
  const response = await axios.get(endpoints.product.getOneProduct(params.companySlug, params.productSlug), {
  });
  const { data: product } = response;
  return product ?? [];
};

export const GET_ONE_PRODUCT = 'get-one-product';

export const useGetOneProduct = (params: { companySlug: string, productSlug: string }) =>
  useQuery({
    queryKey: [GET_ONE_PRODUCT, { params }],
    queryFn: () => getOneProduct(params),
  });
