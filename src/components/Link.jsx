import React from 'react'
import styles from "../Pages/links.module.css"

export default function LinkButton({title, desc, url}) {
  return (
    <a className='bg-black flex flex-col text-center items-center gap-0.5 p-2.5 rounded-lg text-white'
        href = {url}
        target="_blank" 
        rel="noopener noreferrer">
        <div className = {`${styles.linkTitle}`}>{title}</div>
        <div className = {`${styles.linkDesc}`}>{desc}</div>
    </a>
  )
}
