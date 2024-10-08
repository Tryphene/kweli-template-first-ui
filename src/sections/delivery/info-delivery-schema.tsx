import * as Yup from "yup";

export const NewDeliverySchema = Yup.object().shape({
  customer_online_name: Yup.string().required("Le nom est requis"),
  customer_online_subname: Yup.string().required("Le prénom est requis."),
  customer_online_phone: Yup.string().required(
    "Le numéro téléphone est requis"
  ),
  full_delivery_address: Yup.string().required(
    "Le lieu de livraison est requis"
  ),
  customer_online_city: Yup.string().required(
    "Veuillez saisir votre ou commune svp"
  ),
  // delivery_fee: Yup.mixed().required("Veuillez sélectionner un client Svp!"),
  // pay_method_id: Yup.mixed().required("Le moyen de paiement et requis"),
});
