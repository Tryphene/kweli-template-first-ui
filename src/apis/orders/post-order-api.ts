/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from '@tanstack/react-query';
// import { isArray } from 'lodash';
// import { toast } from 'sonner';
import axios, { endpoints } from '../../utils/axios';

export const saveNewOrder = async (formData: any, companySlug: string) => {
  try {
    const response = await axios.post(endpoints.orders.create(companySlug), formData);
    return response;
  } catch (error: any) {
      console.log(error?.message ? error?.message[0] : error?.message);
      
    // toast.error(`${isArray(error?.message) ? error?.message[0] : error?.message}`);
  }
};

export const useSaveNewOrder = () =>
  useMutation({
    mutationFn: ({formData, companySlug }: { formData: any; companySlug: string }) =>
      saveNewOrder(formData, companySlug ),
      onError: (error) => {
        console.log(error?.message ? error?.message[0] : error?.message);
    //   toast.error(`${isArray(error?.message) ? error?.message[0] : error?.message}`);
    },
  });
