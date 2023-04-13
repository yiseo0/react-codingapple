import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Detail = (props) => {
   const [alert, setAlert] = useState(true)

   useEffect(() => {
      setTimeout(() => {
         setAlert(false)
      }, 2000)
   }, [])

   let { id } = useParams()
   const data = props.shoes.find(el => el.id == id)
   const { title, content, price } = data

   let Btn = styled.button`
      background-color: ${props => props.bg};
      color: ${props => props.bg == 'blue' ? 'white' : 'black'};
   `
   let NewBtn = styled(Btn)`
      width: 100px;
   `

   const [text, setText] = useState('')
   useEffect(() => {
      if (isNaN(text)) {
         window.alert('숫자를 입력하세요')
      }
   }, [text])


   return (
      <div className="container">
         {
            alert &&
            <div className="alert alert-warning">
               2초이내 구매시 할인
            </div>
         }
         <div className="row">
            <div className="col-md-6">
               <img src={`https://codingapple1.github.io/shop/shoes${Number(id) + 1}.jpg`} width="100%" />
            </div>
            <div className="col-md-6">
               <input type="text" value={text} onChange={(e)=> setText(e.target.value)} />

               <h4 className="pt-5">{title}</h4>
               <p>{content}</p>
               <p>{price}</p>
               <button className="btn btn-danger">주문하기</button>
            </div>
         </div>
      </div>
   );
};

export default Detail;