import { useQuery } from '@tanstack/react-query';
import axios, { endpoints } from '../../utils/axios';

export const getInfoCompany = async (params: { slug: string }) => {
  const response = await axios.get(endpoints.company.getInfo(params.slug), {
    // params: {
    //   page: params.page,
    // },
  });
  const { data: orders } = response;
  return orders ?? [];
};

export const GET_INFOS_COMPANY = 'get-info-company';

export const useGetInfoCompany = (params: { slug: string }) =>
  useQuery({
    queryKey: [GET_INFOS_COMPANY, { params }],
    queryFn: () => getInfoCompany(params),
    // enabled: params.branchId !== undefined,
  });
