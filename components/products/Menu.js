import React from 'react';
import ProductItem from './ProductItem';
import styles from '../../styles/product.module.css';

export default function Menu() {
  return (
    <div className= {styles.menu} >
      <ProductItem 
        pictureSource="https://ecosmart.netlify.app/static/img/products/product_page_5.jpg"
        productName="Dầu dưỡng Hoàng Lan" productPrice="90.000 VND" 
        productDescription="▪️Hồng nhuận da, chống lão hoá, duy trì nét thanh xuân
        ▪️Tăng sức đề kháng, bồi bổ sức khỏe, giúp ngủ ngon
        ▪️Ích trí, bổ huyết, định thần"/>

      <ProductItem 
        pictureSource="https://ecosmart.netlify.app/static/img/products/product_page_4.jpg"
        productName="Tinh dầu Hoắc hương" productPrice="120.000 VND" 
        productDescription="▪️Hồng nhuận da, chống lão hoá, duy trì nét thanh xuân
        ▪️Tăng sức đề kháng, bồi bổ sức khỏe, giúp ngủ ngon
        ▪️Ích trí, bổ huyết, định thần"/>

      <ProductItem 
        pictureSource="https://ecosmart.netlify.app/static/img/products/product_page_3.jpg"
        productName="Tinh dầu hoa hồng" productPrice="100.000 VND" 
        productDescription="▪️Hồng nhuận da, chống lão hoá, duy trì nét thanh xuân
        ▪️Tăng sức đề kháng, bồi bổ sức khỏe, giúp ngủ ngon
        ▪️Ích trí, bổ huyết, định thần"/>

      <ProductItem 
        pictureSource="https://ecosmart.netlify.app/static/img/products/product_page_2.jpg"
        productName="Green Tea" productPrice="70.000 VND" 
        productDescription="▪️Hồng nhuận da, chống lão hoá, duy trì nét thanh xuân
        ▪️Tăng sức đề kháng, bồi bổ sức khỏe, giúp ngủ ngon
        ▪️Ích trí, bổ huyết, định thần"/>

      <ProductItem 
        pictureSource="https://ecosmart.netlify.app/static/img/products/product_page_1.jpg"
        productName="Dark Chocolate" productPrice="50.000 VND" 
        productDescription="▪️Hồng nhuận da, chống lão hoá, duy trì nét thanh xuân
        ▪️Tăng sức đề kháng, bồi bổ sức khỏe, giúp ngủ ngon
        ▪️Ích trí, bổ huyết, định thần"/>
    </div>
  );
}