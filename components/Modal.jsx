"use client";
import React from "react";
import { GrFormClose } from "react-icons/gr";
import { useRouter } from "next/navigation";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";

function Modal() {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();
  const closeModal = () => {
    const modal = document.getElementById("my_modal_5");
    if (modal) {
      modal.close();
    }
  };

  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
        <div className="modal-box bg-[#2F2F2F] relative">
          <button
            className="absolute top-4 right-4 text-white text-xl"
            onClick={closeModal}
          >
            <GrFormClose color="#FFCB74" size={15} />
          </button>
          <h3 className="font-bold text-lg text-white">Success!</h3>
          <p className="py-4 text-white">
            Thank you for your order! Your order has been successfully placed.
            We appreciate your business and will process your order as soon as
            possible.{" "}
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button
                className="btn bg-[#FFCB74] text-[#2F2F2F] font-semibold hover:bg-[#ffb73b]"
                onClick={() => {
                  const temp = user;
                  const formData = window.form;
                  const trueKeys = [];
                  console.log(trueKeys)

                  for (const key in formData) {
                    if (formData[key] === true) {
                      trueKeys.push(key);
                    }
                  }
                  const cartJson = JSON.parse(temp.cart)
                  
                  cartJson.items = cartJson.items.filter(key => !trueKeys.includes(key));
                  temp.cart = JSON.stringify(cartJson)
                  setUser(JSON.parse(JSON.stringify(temp)));
                  router.push("/dashboard");
                }}
              >
                Order Again
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Modal;
