"use client";

import NavBar1 from "../../../components/NavBar1";
import BottomNav from "../../../components/BottomNav";
import React from "react";
import CartProduct from "../../../components/CartProduct";

function Cart() {
  const products = [
    {
      title: "Mini Satchel Bag",
    },
  ];
  const checkOut = () => {
    document.getElementById("my_modal_5").showModal();
  };
  return (
    <>
      <NavBar1 />
      <div className="bg-[#111111] h-screen">
        <form>
          {products.map((product, index) => (
            <CartProduct key={index} title={product.title} />
          ))}
        </form>
      </div>
      <BottomNav checkOutFunc={checkOut} />
    </>
  );
}

export default Cart;
