import React, { useState, useContext } from 'react'
import LoginContext from '../../context/loginContext/logininfoContext'


const LoginUser = () => {
  // const [userData, setUserData] = useState({
  //   firstname : "",
  //   lastname : "",
  //   email : "",
  //   password : ""
  // })
  // const changeHandler = (e) => {
  //   setUserData(()=>({
  //     ...userData,
  //     [e.target.name]: e.target.value
  //   }))
  // }
  
  const login = useContext(LoginContext)
  const submitHandler = (e) => {
    
    login.addUser()
  }

  const ShowName = () => {
    return <>
    <div>{login.state.userData}</div>
    </>
  }
  return (
    <div>
      <div>Signup</div>
      <div>
        <form >
          first name: <input type='text' name='firstname' onChange={changeHandler} />
          last name: <input type='text' name='lastname' onChange={changeHandler} />
          emial: <input type='email' name='email'  onChange={changeHandler} />
          password: <input type='text' name='password' onChange={changeHandler} />
          <button type='button' onClick={submitHandler}>submit</button>
        </form>

      </div>
    </div>
  )
}

export default LoginUser;
