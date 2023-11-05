"use client"

import UserContext from "../contexts/UserContext"
import { useState } from "react"
import { usePathname, redirect } from "next/navigation";



function ContextWrapper({children}) {
    const [user, setUser] = useState(null)

    if(user == null && usePathname() !== "/") {return redirect("/")}

  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
    
  )
}

export default ContextWrapper