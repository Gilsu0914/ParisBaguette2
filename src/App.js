import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useCallback } from 'react'; 
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import data from './data';
import chiefdata from './chiefdata';
import Detail from './component/Detail';
import Cart from './component/Cart';
import Announce from './component/Announce';
import Footer from './component/Footer';
import Quick from './component/Quick';





function App() {
  useEffect(()=>{
    if(localStorage.getItem('watched') == null){
      localStorage.setItem('watched', JSON.stringify([ ]))
    }
  },[]);

  let [pang, setPang] = useState(data);
  let [chief,setChief] = useState(chiefdata);
  let [count, setCount] = useState(0);
  let [more, setMore] = useState(12);
  let [tab,setTab] = useState(0);
  let [moreNum, setMoreNum] = useState(1);
  let navigate = useNavigate();


  return (
    <div>
      <div className="navContainer">
        <div className="innerNav">
          <p className="home" onClick={() => { navigate("/")}}>
            Un Bouquet De Lavande
          </p>
          <ul>
            <li>로그인</li>
            <Link className="menuList" to="/cart"><li>장바구니</li></Link>
          </ul>
          <div className="iconArea">
            <img className="logIn" src={process.env.PUBLIC_URL + "/avatar.png"}/>
            <Link to="/cart"><img className="cartIcon" src={process.env.PUBLIC_URL + "/cart.png"}/></Link>
          </div>
        </div>
      </div>
      <div className="main-bg"></div>
      <Routes>
        <Route path="/" element={
            <div className="MainShowCase">
              <div className="pangMenu">
                <ul>
                  <li onClick={() => { setTab(0) }}>전체상품</li>
                  <li onClick={() => { setTab(1) }}>빵/식빵</li>
                  <li onClick={() => { setTab(2) }}>케이크</li>
                  <li onClick={() => { setTab(3) }}>디저트</li>
                  <li onClick={() => { setTab(4) }}>샐러드</li>
                </ul>
              </div>
              {
                tab == 0 ? //전체상품
                <div>
                  <div className="cardContainer">
                    {
                      pang.map((data, i) => {
                        if(i < more){
                        return (
                          <Link to={`/detail/${i}`} key={i}>
                            <Card pang={pang[i]}></Card>
                          </Link>
                        )
                        }
                    })}
                  </div>
                  <div className="moreBtnContainer">
                    <button
                      className="moreBtn"
                      onClick={() => { {/* 더보기버튼 */}
                        setCount(++count);
                        if (count == 1) {
                          setMore(24)
                          setMoreNum(2)
                        } else if (count == 2) {
                          setMore(36)
                          setMoreNum(3)
                        } else if (count == 3) {
                          setMore(40)
                          setMoreNum(4)
                        } else {
                          alert("더이상 상품이 없습니다.");
                        }
                      }}
                    >더보기 {moreNum} / 4</button>
                  </div>
                </div>
                : null
              }
              {
                tab == 1 ? //빵 샌드위치
                <div>
                  <div className="cardContainer">
                    {pang.map((data, i) => {
                      if(data.sort == 'bread'){
                        return (
                          <Link to={`/detail/${i}`} key={i}>
                            <Card pang={pang[i]}></Card>
                          </Link>
                        )
                      }
                    })}
                  </div>
                </div>
                : null
              }
              {
                tab == 2 ? //케이크
                <div>
                  <div className="cardContainer">
                    {pang.map((data, i) => {
                      if(data.sort == 'cake'){
                        return (
                          <Link to={`/detail/${i}`} key={i}>
                            <Card pang={pang[i]}></Card>
                          </Link>
                        )
                      }
                    })}
                  </div>
                </div>
                : null
              }
              {
                tab == 3 ? //디저트
                <div>
                  <div className="cardContainer">
                    {pang.map((data, i) => {
                      if(data.sort == 'desert'){
                        return (
                          <Link to={`/detail/${i}`} key={i}>
                            <Card pang={pang[i]}></Card>
                          </Link>
                        )
                      }
                    })}
                  </div>
                </div>
                : null
              }
              {
                tab == 4 ? //샐러드
                <div>
                  <div className="cardContainer">
                    {pang.map((data, i) => {
                      if(data.sort == 'salad'){
                        return (
                          <Link to={`/detail/${i}`} key={i}>
                            <Card pang={pang[i]}></Card>
                          </Link>
                        )
                      }
                    })}
                  </div>
                </div>
                : null
              }
              <div className='rollout'>
                <h2>신상품 소개</h2>
                <img className='eventDesktop' src={process.env.PUBLIC_URL + "/rollout.png"}/>
                <img className='eventPhone' src={process.env.PUBLIC_URL + "/rolloutPhone.png"}/>
              </div>
              <div className="event">
                <h2>진행중인 이벤트</h2>
                <img className='eventDesktop' src={process.env.PUBLIC_URL + "/event.png"} />
                <img className='eventPhone' src={process.env.PUBLIC_URL + "/eventPhone.png"} />
              </div>
              
            </div>
        }/>
        <Route path="/detail/:id" element={<div><Detail pang={pang} setPang={setPang} chief={chief}/></div>}/>
        <Route path="/cart" element={<div><Cart /></div>}/>
        <Route path="*" element={<div className="page404"><h3>해당 페이지를 찾을 수 없습니다.</h3></div>}/>
      </Routes>
      
      <Announce/>
      <Footer/>
      <Quick/>
    </div>
  );
}

function Card({pang}){
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  };
  return (
    <div className="eachCard Product" onClick={()=>{scrollToTop();}}>
      <p className="photo">
        <img src={process.env.PUBLIC_URL + pang.image} />
      </p>
      <p className='minidesc'>{pang.title}</p>
      <p className='minidesc'>{pang.price.toLocaleString('ko-KR')}원</p>
    </div>
  )
};


export default App;