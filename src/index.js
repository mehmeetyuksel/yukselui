import React from 'react'
import styles from './styles.module.css'

export const Button = ({ text, variant, ...otherProps }) => {
  return <button className={styles[variant]}>{text}</button>
}
