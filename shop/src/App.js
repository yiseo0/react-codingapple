import React, { createContext, useEffect, useState } from 'react';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import './App.css';
import data from './data'
import Card from './components/Card'
import Detail from './pages/Detail';
import About from './pages/About';
import Event from './pages/Event';
import Cart from './pages/Cart';
import axios from 'axios';

// context 생성
export let Context1 = createContext()


const App = () => {

  let [shoes, setShoes] = useState(data)
  let [stock, setStock] = useState([10, 11, 12])

  let [isChk, setIsChk] = useState(2)
  let [loading, setLoading] = useState(false)

  // 최근 본 상품
  useEffect(() => {
    if (!localStorage.getItem('watched')) {
      localStorage.setItem('watched', JSON.stringify([]))
    }
  }, [])

  const fnSort = () => {
    let sort = shoes.sort((a, b) => {
      return a.title < b.title ? -1 : 1
    })
    setShoes([...sort])
  }

  useEffect(() => {

  }, [isChk])

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Shoe Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/detail">Detail</Link></Nav.Link>
            <Nav.Link><Link to="/about">about</Link></Nav.Link>
            <Nav.Link><Link to="/event">event</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>

            <Container>
              <Row>
                {
                  shoes.map(shoe => {
                    return <Card shoe={shoe} key={shoe.id} />
                  })
                }
              </Row>
              <button onClick={fnSort}>정렬</button>

              <button onClick={() => {
                setLoading(true)
                isChk <= 3 &&
                  axios.get(`https://codingapple1.github.io/shop/data${isChk}.json`)
                    .then(res => {
                      setShoes([...shoes, ...res.data])
                    })
                    .catch(() => console.log('실패'))
                setIsChk(isChk + 1)
                setLoading(false)


                Promise.all([
                  axios.get(axios.get('url2'), axios.get('url2'))
                    .then(() => { })
                    .catch(() => { })
                ])
              }}>버튼</button>

              {
                loading && <div>로딩중</div>
              }

              {
                isChk > 4 && <div>상품이 더 없습니다.</div>
              }
            </Container>
          </>
        } />
        <Route path="/detail/:id" element={
          <Context1.Provider value={{ stock, shoes }}>
            <Detail shoes={shoes} />
          </Context1.Provider>
        } />
        <Route path="*" element={<div>404 페이지 오류</div>} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>member</div>} />
          <Route path="lacation" element={<div>lacation</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </>
  );
};

export default App;