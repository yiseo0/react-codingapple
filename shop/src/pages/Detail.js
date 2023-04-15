import React, { useContext, useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import TabContent from '../components/TabContent';

import { Context1 } from '../App';
import { useDispatch } from 'react-redux';
import { addItem } from '../store';

const Detail = (props) => {

   const { id } = useParams()
   const data = props.shoes.find(el => el.id == id)
   const { title, content, price } = data
   const [tab, setTab] = useState(0)
   const [alert, setAlert] = useState(true)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   useEffect(() => {
      setTimeout(() => {
         setAlert(false)
      }, 2000)
   }, [])

   // context
   let { stock } = useContext(Context1)

   // tab
   const fnTabClick = (num) => {
      setTab(num)
   }

   // 장바구니 추가
   const onAdd = () => {
      dispatch(addItem({ id: data, id, name: title, count: 1 }))
      navigate('/cart')
   }

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
         {stock}

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
               <input type="text" value={text} onChange={(e) => setText(e.target.value)} />

               <h4 className="pt-5">{title}</h4>
               <p>{content}</p>
               <p>{price}</p>
               <button className="btn btn-primary" onClick={onAdd}>장바구니 담기</button>
               <button className="btn btn-danger">주문하기</button>
            </div>
         </div>

         <Nav variant="tabs" defaultActiveKey="link0">
            <Nav.Item>
               <Nav.Link eventKey="link0" onClick={() => fnTabClick(0)}>버튼0</Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link eventKey="link1" onClick={() => fnTabClick(1)}>버튼1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link eventKey="link2" onClick={() => fnTabClick(2)}>버튼2</Nav.Link>
            </Nav.Item>
         </Nav>

         <TabContent tab={tab} />

      </div>
   );
};

export default Detail;