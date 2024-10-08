/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext } from "react";
import { useParams } from "react-router-dom";
import { useGetInfoCompany } from "../apis/info/get-info-company-api";
import Loader from "../components/loader/loader";
import NotFoundPage from "../pages/404";

type CompanyContextType = {
  company: any;
  refetch: () => any;
  companySlug: string | undefined;
};

const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

export const useCompany = () => {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error("useCompany must be used within a CompanyProvider");
  }
  return context;
};

type Props = {
  children: React.ReactNode;
};

export default function CompanyProvider({ children }: Props) {
  const params = useParams();

  const { companySlug } = params;
  const {
    data: company,
    isLoading: companyLoading,
    refetch,
  } = useGetInfoCompany({
    // page: 0,
    slug: companySlug!,
  });

  console.log("company", company);

  return (
    <CompanyContext.Provider
      value={{
        company,
        refetch,
        companySlug,
      }}
    >
      {companyLoading ? (
        <Loader />
      ) : company ? (
        <>{children}</>
      ) : (
        <NotFoundPage />
      )}
    </CompanyContext.Provider>
  );
}
