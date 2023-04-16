import React, { memo, useMemo, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeAge, changeName } from '../store/userSlice';
import { addCount, delItem } from '../store';

const Child = memo(() => {
   console.log('재렌더링')
   return <div>자식 컴포넌트</div>
})

const 함수 = () => {
   return <div>복잡한 연산</div>
}

const Cart = () => {
   // useMemo
   useMemo(() => {
      함수()
   },[state])

   let state = useSelector(state => state)
   let { user, cart } = state
   let dispatch = useDispatch()

   let [count, setCount] = useState(0)

   return (
      <div>
         <h3>{user.name}({user.age})의 장바구니</h3>
         <button onClick={() => dispatch(changeName())}>이름 변경</button>
         <button onClick={() => dispatch(changeAge(10))}>나이 변경</button>

         <Table>
            <thead>
               <tr>
                  <th>#</th>
                  <th>상품명</th>
                  <th>수량</th>
                  <th>변경하기</th>
                  <th>삭제하기</th>
               </tr>
            </thead>
            <tbody>
               {
                  cart.map(el => {
                     return (
                        <tr key={el.id}>
                           <td>{el.id}</td>
                           <td>{el.name}</td>
                           <td>{el.count}</td>
                           <td><button onClick={() => dispatch(addCount(el.id))}>+</button></td>
                           <td><button onClick={() => dispatch(delItem(el.id))}>삭제</button></td>
                        </tr>
                     )
                  })
               }
            </tbody>
         </Table>

         {/* memo */}
         <Child count={count}></Child>
         <button onClick={() => setCount(count + 1)}>카운트 증가</button>
      </div>
   );
};

export default Cart;