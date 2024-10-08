import * as Yup from "yup";

export const OrangePaymentSchema = Yup.object().shape({
  phone: Yup.string().required("Le numéro mobile money est requis"),
  code: Yup.number().required("Le code de confirmation est requis"),
});
