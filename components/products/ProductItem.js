import React from 'react';
import styles from '../../styles/product.module.css';
import Link from 'next/link';
import { BsMessenger } from 'react-icons/bs';

export default function ProductItem(props) {
  const { pictureSource, productName, productPrice, productDescription } = props; 
  return (
    <div className = {styles.product_items}>
      <div className = {styles.img_container} type="button" data-bs-toggle="modal" data-bs-target="#product5">
            <img src = { pictureSource } alt=""/> 
      </div>

      <div className = {styles.details}>
            <div className = {styles.details_sub}>
                <h3 className = {styles.product_name}> { productName } </h3>
                <h3 className = {styles.product_price}> { productPrice } </h3>
            </div>
            <p>{ productDescription }</p>
            <Link href="https://www.facebook.com/thoitrangmyecosmart"  className = {styles.goshop}> 
              <BsMessenger className={styles.item_icon}/> 
            </Link>
    </div>
    </div>
  )
}