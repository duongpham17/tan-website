import styles from './Small.module.scss';
import React from 'react';
import Link from 'next/link';

import { google_location, phone, shop_location, hours, email } from '@data/business';

const Small = () => {
  return (
    <footer className={styles.container}>

      <section className={styles.about}>

        <div>
          <b>LOCATION</b>
          <Link href={google_location} rel={"noopener noreferrer"} target={"_blank"}>
            {shop_location.split(",").map((el, index) => <p key={el}>{el}</p>)}
          </Link>
        </div>

        <div>
          <b>HOURS</b>
          <p> {hours.weekdays.name} : {hours.weekdays.time} </p>           
          <p> {hours.sunday.name} : {hours.sunday.time} </p>  
        </div>

        <div>
          <b>CONTACT</b>
          <Link href={`mailto:${email}`}>{email}</Link>
          <Link href={`tel:${phone}`}> {phone.substring(0, 3)} {phone.substring(3, 7)} {phone.substring(7, 11)}</Link>
        </div>

      </section>

    </footer>
  )
}

export default Small