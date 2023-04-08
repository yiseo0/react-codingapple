/* eslint-disable */

import React, { useState } from 'react';
import './App.css';

const App = () => {
    let post = "강남 우동 맛집";
    let [title, setTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
    let [great] = useState(0)
    return (
        <div>
            <div className="App">
                <div className="black-nav">
                    <h4>ReactBlog</h4>
                </div>
                <div className="list">
                    <h4>{title[0]} <span>👍</span>{great}</h4>
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
            </div>
        </div >
    );
};

export default App;