import React from 'react';
import { Col } from 'react-bootstrap';

const Card = (props) => {
   const { id, title, content, price } = props.shoe

   return (
      <Col md={4}>
         <img src={`https://codingapple1.github.io/shop/shoes${id + 1}.jpg`} width="80%" alt="title" />
         <h4>{title}</h4>
         <p>{content}</p>
         <p>{price}</p>
      </Col>
   )
}

export default Card;