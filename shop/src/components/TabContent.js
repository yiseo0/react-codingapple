import React, { useEffect, useState } from 'react';

const TabContent = ({ tab }) => {
   let [fade, setFade] = useState('')

   useEffect(() => {
      let timer = setTimeout(() => setFade('end'), 100)
      return () => {
         clearTimeout(timer)
         setFade('')
      }
      // state 변경함수를 모아서 한번에 처리, 원하는 효과 X (리액트의 automatic batching)
      // setFade('end')
      // return () => {
      //    setFade('')
      // }
   }, [tab])
   // 방법1 
   return (
      <div className={`start ${fade}`}>
         {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
      </div>
   )

   // 방법2
   // if(tab == 0) {
   //    return <div>내용0</div>
   // } else if (tab == 1) {
   //    return <div>내용1</div>
   // } else if (tab == 2) {
   //    return <div>내용2</div>
   // }

   // 방법3 
   // return (
   //    <div>
   //       {
   //          tab == 0 &&
   //          <div>내용0</div>
   //       }
   //       {
   //          tab == 1 &&
   //          <div>내용1</div>
   //       }
   //       {
   //          tab == 2 &&
   //          <div>내용2</div>
   //       }
   //    </div>
   // );
};

export default TabContent;