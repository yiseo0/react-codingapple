/* eslint-disable */

import React, { useState } from 'react';
import './App.css';

const App = () => {
    let post = "강남 우동 맛집";
    let [title, setTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
    let [great, setGreat] = useState([0, 0, 0])
    let [modal, setModal] = useState(false)
    let [modalNum, setModalNum] = useState(0)
    
    function ModalPopup(num) {
        setModal(true)
        setModalNum(num)
    }

    return (
        <div>
            <div className="App">
                <div className="black-nav">
                    <h4>ReactBlog</h4>
                </div>

                {title.map((el, idx) => {
                    return (
                            <div className="list" key={idx} onClick={()=>ModalPopup(idx)}>
                                <h4>{el} <span onClick={() => {
                                    let copy = [...great]
                                    copy[idx] += 1
                                    setGreat(copy)
                                }}>👍</span>{great[idx]}</h4>
                                <p>2월 17일 발행</p>
                            </div>
                    )
                })}

                {modal ? <Modal title={title} modalNum={modalNum} setTitle={setTitle} /> : null}

            </div>
        </div >
    );
};

function Modal(props) {
    return (
        <div className="modal">
            <h4>{props.title[props.modalNum]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            {/* <button onClick={() => {
                let copy = [...props.title]
                copy[0] = '여자코트 추천'
                props.setTitle(copy)
            }}>글수정</button> */}
        </div>
    )
}
export default App;