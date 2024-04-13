import React from 'react'

import imgJPG from '../public/assets/naruto_doodle.jpg'
import imgSVG from '../public/assets/naruto_doodle.svg'

import './styles.css'
import ClickCounter from './ClickCounter'
import LoginUser from './components/home/login';
import LoginState from './context/loginContext/logininfoState';
// context/loginContext/logininfoState

// type AppProps = {
//   login: React.ReactNode
// }

const App = () => {
  const num = 10

  return (
    <>
    <LoginState >
      <h1 id="app-root">React Typescript project</h1>
      <img src={imgJPG} alt="jpg-img" width="200" height="200" />
      <img src={imgSVG} alt="jpg-img" width="200" height="200" />
      <ClickCounter />
      <LoginUser />
    </LoginState>
    </>
  )
}

export default App;
