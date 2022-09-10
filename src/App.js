import logo from './logo.svg';
import './App.css';
import {useState} from 'react'; 
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import data from './data';
import data2 from './data2';
import data3 from './data3';
import data4 from './data4';
import chiefdata from './chiefdata';
import MainShowCase from './component/MainShowCase';
import Detail from './component/Detail';
import Cart from './component/Cart';
import Footer from './component/Footer';



function App() {
  let [pang, setPang] = useState(data);
  let [pang2,setPang2] = useState(data2);
  let [pang3,setPann3] = useState(data3);
  let [pang4,setPang4] = useState(data4);
  let [chief,setChief] = useState(chiefdata);
  let navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  })}

  return (
  <div>
    <div className='quick'>
        <img className='sign' src={process.env.PUBLIC_URL + '/call.png'} />
      </div>
      <div className='quick2' onClick={()=>{ 
          scrollToTop();
          navigate("/cart")
        }}>
        <img className='sign2' src={process.env.PUBLIC_URL + '/shopping-bag.png'} />
      </div>
      <div className="navContainer">
        <div className='innerNav'>
          <p className="home" onClick={()=>{navigate("/")}}>Un Bouquet De Lavande</p>
          <ul>
            <li>로그인</li>
            <li>회원가입</li>
            <Link className='menuList' to="/cart"><li>장바구니</li></Link>
          </ul>
          <img className="hamburger" src={process.env.PUBLIC_URL + "/menu.png"}/>
        </div>
      </div>
      <div className="main-bg"></div>
      {/* 실험 */}
      
      
      <Routes>
        <Route path="/" element={<div><MainShowCase pang={pang} pang2={pang2} pang3={pang3} pang4={pang4} setPang={setPang} /></div>} />
        <Route path="/detail/:id" element={<div><Detail pang={pang} pang2={pang2} pang3={pang3} pang4={pang4} setPang={setPang} chief={chief} /></div>} />
        <Route path="/cart" element={<div><Cart/></div>} />
        <Route path="*" element={<div>해당 페이지를 찾을 수 없습니다.</div>} />
      </Routes>
      
      <Footer />
  </div>
  );
}

export default App;
