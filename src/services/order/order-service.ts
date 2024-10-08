/* eslint-disable @typescript-eslint/no-explicit-any */
import Cookies from 'js-cookie';

// Initialiser le formulaire de commande dans les cookies
export function setOrder(order: any) {
    Cookies.set('order', JSON.stringify(order));
};

// Récupérer la commande
export function getOrder () {
    const order = Cookies.get('order');
    return order ? JSON.parse(order) : {};
};