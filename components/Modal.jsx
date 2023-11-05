'use client'
import React from 'react'
import {GrFormClose} from 'react-icons/gr'
import { useRouter } from 'next/navigation';

function Modal() {
    const router = useRouter()
    const closeModal = () => {
        const modal = document.getElementById('my_modal_5');
        if (modal) {
            modal.close();
        }
    };

    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
                <div className="modal-box bg-[#2F2F2F] relative">
                <button className="absolute top-4 right-4 text-white text-xl" onClick={closeModal}>
                <GrFormClose color='#FFCB74' size={15}/>
                </button>
                    <h3 className="font-bold text-lg text-white">Success!</h3>
                    <p className="py-4 text-white">Thank you for your order! Your order has been successfully placed. We appreciate your business and will process your order as soon as possible. </p>
                    <div className="modal-action">
                        <form method="dialog">
                        <button className="btn bg-[#FFCB74] text-[#2F2F2F] font-semibold hover:bg-[#ffb73b]" onClick={() => router.push("/dashboard")}>Order Again</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default Modal


