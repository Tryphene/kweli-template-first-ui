/* eslint-disable @typescript-eslint/no-explicit-any */
import BoxProductItems from "../../components/box-product-items";
import Slide from "../../components/slide";

type Props = { products: any };

export default function SlideBestProduct({ products }: Props) {
  return (
    <Slide itemsToShow={3}>
      {products.map((product: any, index: number) => (
        <BoxProductItems
          product={product}
          key={index}
          // name={product?.name}
          // img="https://img.freepik.com/vecteurs-libre/eclaboussure-fruit-oranges-realistes_52683-65283.jpg?ga=GA1.1.1859331002.1720646969&semt=ais_hybrid"
        />
      ))}
    </Slide>
  );
}

// const data = [
//   {
//     name: `John Morgan`,
//     img: `/students/John_Morgan.jpg`,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
//   },
//   {
//     name: `Ellie Anderson`,
//     img: `/students/Ellie_Anderson.jpg`,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
//   },
//   {
//     name: `Nia Adebayo`,
//     img: `/students/Nia_Adebayo.jpg`,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
//   },
//   {
//     name: `Rigo Louie`,
//     img: `/students/Rigo_Louie.jpg`,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
//   },
//   {
//     name: `Mia Williams`,
//     img: `/students/Mia_Williams.jpg`,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
//   },
// ];
