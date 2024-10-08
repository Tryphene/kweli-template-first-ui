// ----------------------------------------------------------------------

export const paths = {
  home: {
    page: (companySlug: string) => `/${companySlug}`,
  },
  product: {
    page: (companySlug: string, productSlug: string) =>
      `/${companySlug}/product/${productSlug}/detail`,
  },
  cart: {
    page: (companySlug: string) => `/${companySlug}/cart`,
  },
  delivery: {
    page: (companySlug: string) => `/${companySlug}/delivery`,
  },
  orderSummary: {
    page: (companySlug: string) => `/${companySlug}/order-summary`,
  },
  payment: {
    page: (companySlug: string) => `/${companySlug}/payment`,
  },
  orderTracking: {
    page: (companySlug: string, orderRef: string) => `/${companySlug}/order-tracking/${orderRef}`,
  },
};
