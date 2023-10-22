import styles from './Small.module.scss';
import React from 'react';
import Link from 'next/link';

import {AiFillInstagram, AiFillFacebook, AiFillGoogleCircle, AiOutlineClockCircle} from 'react-icons/ai';
import {MdLocationOn, MdEmail, MdOutlineSmartphone} from 'react-icons/md';

const Small = () => {
  return (
    <footer className={styles.container}>

      <div className={styles.information}>

        <section className={styles.logo}>
          <h1>THE NAILIST</h1>
          <div>
            <Link href={"/"} rel={"noopener noreferrer"} target={"_blank"}><AiFillInstagram/></Link>
            <Link href={"/"} rel={"noopener noreferrer"} target={"_blank"}><AiFillFacebook/></Link>
            <Link href={"/"} rel={"noopener noreferrer"} target={"_blank"}><AiFillGoogleCircle/></Link>
          </div>
        </section>
        
        <section className={styles.us}>
          <b>Get in Touch</b>
          <div>
            <span><MdEmail/></span>
            <Link href="mailto:hello@thenailist.co.uk">hello@thenailist.co.uk</Link>
          </div>
          <div>
            <span><MdOutlineSmartphone/></span>
            <Link href="tel:02086167977"> 000 1212 5151</Link>
          </div>
          <div>
            <span><MdLocationOn /></span>
            <Link 
              href="https://www.google.com/maps/place/Hippodrome/@51.511657,-0.131738,17z/data=!3m1!4b1!4m6!3m5!1s0x487604cd881e209d:0x144845c5aba0da3c!8m2!3d51.511657!4d-0.1291577!16zL20vMDR2Zmx3?entry=ttu"
              rel={"noopener noreferrer"} 
              target={"_blank"}
            >
              17 Example Road, Somewhere, LN19 8DS
            </Link>
          </div>
          <div>
            <AiOutlineClockCircle />
            <p> Monday - Sunday - 9:00 - 19:00 </p>
          </div>
        </section>

        <section className={styles.links}>
          <b>Links</b>
          <Link href="/prices">Book now</Link>
          <Link href="/services">Services</Link>
          <Link href="/terms">Terms & Conditions</Link>
        </section>
      </div>

      <div className={`${styles.copyright}`}>
        <small>@ 2023, thenailist.co.uk</small>
      </div>

    </footer>
  )
}

export default Small