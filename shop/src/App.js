import React, { useState } from 'react';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import './App.css';
import data from './data'
import Card from './components/Card'
import Detail from './pages/Detail';
import About from './pages/About';
import Event from './pages/Event';

const App = () => {

  let [shoes, setShoes] = useState(data)

  const fnSort = () => {
    let sort = shoes.sort((a, b) => {
      return a.title < b.title ? -1 : 1
    })
    setShoes([...sort])
  }

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
            </Container>
          </>
        } />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="*" element={<div>404 페이지 오류</div>} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>member</div>} />
          <Route path="lacation" element={<div>lacation</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
      </Routes>

    </>
  );
};

export default App;