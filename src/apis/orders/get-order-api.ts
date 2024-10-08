import { useQuery } from '@tanstack/react-query';
import axios, { endpoints } from '../../utils/axios';

export const getOrder= async (params: { companySlug: string, orderRef: string }) => {
  const response = await axios.get(endpoints.orders.view(params.companySlug, params.orderRef));
  const { data: order } = response;
  return order ?? [];
};

export const GET_ORDER= 'get-order';

export const useGetOrder= (params: { companySlug: string, orderRef: string }) =>
  useQuery({
    queryKey: [GET_ORDER, { params }],
    queryFn: () => getOrder(params),
    enabled: params?.companySlug !== undefined,
  });
