import React from 'react'

function CartProduct({title}) {
    return (
            <div class="flex items-center mb-4 bg-[#FFCB74] shadow-md rounded-md p-4 mr-5 ml-5 w-[85%]">
                <input name={title} id="checkbox" type="checkbox" className="w-4 h-4 checkbox rounded-none bg-transparent border-white"/>
                <label for="checkbox" class="ml-2 text-lg font-bold text-[#2F2F2F]">{title.split("-")[0]}</label>
            </div>
    )
}

export default CartProduct