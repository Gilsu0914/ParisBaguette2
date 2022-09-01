import logo from './logo.svg';
import './App.css';
import {useState} from 'react'; 
import data from './data';
import Footer from './component/Footer';
import MainShowCase from './component/MainShowCase';

function App() {

  let [pang, setPang] = useState(data)

  return (
    <div>
      <div className="navContainer">
        <div className='innerNav'>
          <p><a className="home" href="#">놀부네 빵앗간</a></p>
          <ul>
            <li>전체상품</li>
            <li>케이크</li>
            <li>빵/샌드위치</li>
            <li>디저트</li>
            <li>샐러드</li>
          </ul>
          <img className="hamburger" src={process.env.PUBLIC_URL + "/menu.png"}/>
        </div>
      </div>
      <div className="main-bg"></div>
      <MainShowCase pang={pang} />
      <Footer />
    </div>
  );
}

export default App;
