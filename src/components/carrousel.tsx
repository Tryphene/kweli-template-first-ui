/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./carousel.css";
import { Icon } from "@iconify/react/dist/iconify.js";

type Props = {
  data: any;
};

export default function Carousel({ data }: Props) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <Icon
        icon="mingcute:left-line"
        width={40}
        onClick={prevSlide}
        className="arrow arrow-left"
      />
      {data.map((item: any, idx: number) => {
        return (
          <div
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
            style={{ backgroundImage: `url(${item})` }}
          ></div>
          // <img
          //   src={item}
          //   alt={item}
          //   key={idx}
          //   className={slide === idx ? "slide" : "slide slide-hidden"}
          // />
        );
      })}
      <Icon
        icon="mingcute:right-line"
        width={40}
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.map((_: any, idx: number) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
}
