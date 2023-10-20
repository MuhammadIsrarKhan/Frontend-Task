import Logo from "@/assets/images/RandoStore.png";
import cart from "@/assets/cart.svg";
import { useEffect, useState } from "react";
import { getImageSrc } from "../utils";

const Card = ({ item }) => {
  const img = getImageSrc(item?.img)
  return (
    <div className="w-80 h-96 m-8  max-w-sm bg-[#F1F3F2] flex flex-col items-center relative">
      <img
        src={cart}
        alt="cart"
        className="w-[30px] h-[30px] bg-white p-1 rounded-xl absolute top-5 right-5"
      />
      <div className="h-72 flex items-center justify-center px-8">
        <img
          src={img}
          alt="img"
          className=" w-full"
        />
      </div>
      <h4 className="mt-4">{item?.name}</h4>
      <h6>${item?.price}</h6>
    </div>
  );
};

export default Card;
