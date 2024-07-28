import React from 'react'
import styles from '../css/Login.module.css'
const Login = () => {
  return (
    <div className={styles.head}>
      <div className={styles.log}>

        
      </div>
     <div className={styles.content}>
      <h2>Login</h2>
      <input type='text' placeholder='Username'/>
      <input type='password' placeholder='Password'/>

      <button>Login</button>
     <p> Don't have a account <a href='#'>Register?</a></p>
     </div>
    </div>
  )
}

export default Login
