"use client"
import React from 'react'
import styles from './page.module.css'
import {useState} from 'react';

export default function Contact() {
  const [fullname,setFullname] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const [error,setError] = useState("");
  const [success,setSuccess] = useState(false);
  const handleSubmit = async (e) =>{
    e.preventDefault();
  const res = await fetch('/api/contact',
          {method : 'POST', headers: {'Content-Type': 'application/json',}
          ,body: JSON.stringify({fullname,email,message}),});
        const {msg , success}  = await res.json();
        setError(msg);
        setSuccess(success);
        
};

  return (


    

  <div className={styles.container}>
   
    <form onSubmit={handleSubmit} className={styles.contactForm} >
    <h1 className={styles.titre}>Contact</h1>
      <div>
        <label htmlFor="fullname">Full Name:</label>
        <input
          type="text"
          id="fullname"
        
        onChange={(e)=>setFullname(e.target.value)}
        value={fullname}
        />
      </div>


      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
        
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          type="text"
          
          onChange={(e)=>setMessage(e.target.value)}
          value={message}
  
      
        ></textarea>
      </div>
      <button type="submit" className={styles.submitButton}>
        Send
      </button>
    </form>
    <div>
         {error && error.map((e)=>
         <div key={e} className={`${success? 'green' : 'red'}`}> {e} </div>)}


    </div>

    </div>
 
  )
}

