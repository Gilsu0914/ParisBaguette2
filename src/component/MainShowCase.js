import react from 'react';
import {Routes, Route, Link} from 'react-router-dom';

function MainShowCase({pang}){
  return (
    <div className='MainShowCase'>
      <div className='pangMenu'>
        <ul>
          <li>전체상품</li>
          <li>빵/샌드위치</li>
          <li>케이크</li>
          <li>디저트</li>
          <li>샐러드</li>
        </ul>
      </div>
      <div className="sort">
        <button className="expensiveBtn">높은가격순</button>
        <button className="chipBtn">낮은가격순</button>
        <button className="abcBtn">가나다순</button>
      </div>
      <div className="cardContainer">
        {
          pang.map((a, i) => {
          return(
            <Link to={`/detail/${i}`}>
              <Card pang={pang[i]}></Card>
            </Link>
           );
          })
        }
      </div>
    </div>
  );
};

function Card({pang}){
  return (
    <div className="eachCard">
      <img src={process.env.PUBLIC_URL + pang.image} />
      <p>
      {pang.title}
      <br/>
      {pang.price}
      </p>
    </div>
  )
};

export default MainShowCase;