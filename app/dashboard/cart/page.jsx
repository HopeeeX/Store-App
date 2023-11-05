"use client";

import NavBar1 from "../../../components/NavBar1";
import BottomNav from "../../../components/BottomNav";
import React, {useRef, useContext}from "react";
import CartProduct from "../../../components/CartProduct";
import UserContext from "../../../contexts/UserContext";

function Cart() {
  const formRef = useRef(null);
  const checkOut = () => {
    const form = formRef.current;

    const formDataJson = {};

    // Loop through the form elements
    for (let i = 0; i < form.elements.length; i++) {
      const element = form.elements[i];

      if (element.name) {
        formDataJson[element.name] = element.checked;
      }
    }
    window.form = formDataJson;
    document.getElementById("my_modal_5").showModal();
  };
  return (
    <UserContext.Consumer>
    {({user}) => (<>
      <NavBar1 />
      <div className="bg-[#111111] h-[100%] pt-[100px] pb-[164px]">
      <form ref={formRef}>
        <div className='flex justify-center items-center flex-col h-[100%]'>

          
          {user.cart =="" ? <></> : JSON.parse(user.cart).items.map((product, index) => 
            (<CartProduct key={index} title={product} />)
          )}
          </div>
        </form>
      </div>
      <BottomNav checkOutFunc={checkOut} />
    </>)}
    </UserContext.Consumer>
  );
}

export default Cart;
