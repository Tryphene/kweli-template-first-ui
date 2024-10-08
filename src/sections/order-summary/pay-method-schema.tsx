import * as Yup from "yup";

export const NewPayMethodSchema = Yup.object().shape({
  // pay_method_id: Yup.mixed().required("Le moyen de paiement et requis"),
  pay_method_id: Yup.string().required("Le moyen de paiement et requis"),
});
