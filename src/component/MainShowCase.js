import react from 'react';
import {useState} from 'react';
import {Routes, Route, Link} from 'react-router-dom';

function MainShowCase({pang, pang2, pang3, pang4, setPang}){

  let [count, setCount] = useState(0);

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
        <button className="abcBtn"
        //   onClick={()=>{
        //   pang2.sort((a, b)=>{
        //     if(a.title.toLowercase() > b.title.toLowercase()) return 1
        //     else if(a.title.toLowercase() < b.title.toLowercase()) return -1
        //     else return 0
        //   })
        //   setPang2(pang2);
        // }}
        >가나다순</button>
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
      <div className='moreBtnContainer'>
        <button className='moreBtn' onClick={()=>{
          setCount(++count);
          if(count == 1){
            let copy = [...pang, ...pang2];
            setPang(copy);
          }
          else if(count == 2){
            let copy = [...pang, ...pang3];
            setPang(copy);
          }
          else if(count == 3){
            let copy =[...pang, ...pang4];
            setPang(copy);
          }
          else{
            alert('더이상 상품이 없습니다.');
          }
        }}>더보기</button>
      </div>
    </div>
  );
};




function Card({pang}){

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  };

  return (
    <div className="eachCard" onClick={()=>{scrollToTop();}}>
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