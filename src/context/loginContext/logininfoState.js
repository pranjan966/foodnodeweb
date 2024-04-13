import React, { useState } from "react";
import loginContext from "./logininfoContext";

const  LoginState = ({children}) => {
  const [userData, setUserData] = useState({
    firstname : "",
    lastname : "",
    email : "",
    password : ""
  })

  const addUser = () => {
    setUserData(()=>({
      ...userData,
      [e.target.name]: e.target.value
    }))
  }

  return (
    
    <loginContext.Provider value={{userData,addUser}}>
      {children}
    </loginContext.Provider>
  )
}

export default LoginState;