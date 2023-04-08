/* eslint-disable */

import React, { useState } from 'react';
import './App.css';

const App = () => {
    let post = "강남 우동 맛집";
    let [title, setTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
    let [great, setGreat] = useState(0)

    function test() {
        console.log(1)
    }

    return (
        <div>
            <div className="App">
                <div className="black-nav">
                    <h4>ReactBlog</h4>
                </div>
                <div className="list">
                    <h4>{title[0]} <span onClick={() => setGreat(great + 1)}>👍</span>{great}</h4>
                    <p>2월 17일 발행</p>
                </div>
                <div className="list">
                    <h4>{title[1]}</h4>
                    <p>2월 17일 발행</p>
                </div>
                <div className="list">
                    <h4>{title[2]}</h4>
                    <p>2월 17일 발행</p>
                </div>

                {/* state 데이터 변경(배열) */}
                <button onClick={() => {
                    let copy = [...title]
                    copy[0] = "여자코트 추천"
                    setTitle(copy)
                }}>글 수정</button>
                
                {/* state 가나다순 정렬 */}
                <button onClick={() => {
                    let copy = [...title].sort()
                    setTitle(copy)
                }}>정렬</button> 
            </div>
        </div >
    );
};

export default App;