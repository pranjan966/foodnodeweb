import React from 'react';

import imgJPG from '../public/assets/naruto_doodle.jpg';
import imgSVG from '../public/assets/naruto_doodle.svg';

import './styles.css';
import ClickCounter from './ClickCounter';

type AppProps = {

}

const App: React.FC<AppProps> = (props) => {
  return (
    <>
      <h1 id='app-root'>
        React Typescript project 
      </h1>
      <img src={imgJPG} alt='jpg-img' width="200" height="200" />
      <img src={imgSVG} alt='jpg-img' width="200" height="200" />
      <ClickCounter />
    </>
  )
}

export default App;