import React from 'react'
import logo from './logo.svg';
import styles from'./App.module.css'; 
import Test from './Test';
import {Title} from './Test2';
import Bootstrap from './Bootstrap';
import Tailwind from './Tailwind';
import "./index.css" 


const style = () => {
  return (
      <div className={styles.App}>
      <Title>{process.env.NODE_ENV}</Title>
      <p>{process.env.REACT_APP_API_URL}</p>
      {process.env.NODE_ENV === 'production' && (
        <div>
          <img src="/logo512.png" alt="" />
          <img src={logo} alt="" />
        </div>
      )}
      <Test/>
      <Bootstrap/>
      <Tailwind/>
    </div>
  )
}

export default style