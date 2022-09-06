import react, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function Detail({pang, allPang}){
  
  useEffect(()=>{
    let timer = setTimeout(()=>{ setNotice(false) },10000);
    
    return ()=>{//useEffect보다 먼저 실행
      clearTimeout(timer);
    }
  },[]);

  let {id} = useParams();//유저가 url파라미터에 입력한 것을 가져오려면 useParams()
  let idSynchro = pang.find((pang)=>{
    return pang.id == id
  });
  let [notice,setNotice] = useState(true);

  return (
    <div className="Detail">
      <div className="upDetail">
        <div className="imgContainer">
          <img className="detailImage" src={process.env.PUBLIC_URL + pang[id].image}/>
        </div>
        <div className="description">
          <h1>{idSynchro.title}</h1>
          <h4>{idSynchro.content}</h4>
          <p>가격 {idSynchro.price}</p>
          <p className="desLine desLine1"></p>
          <h4 className="allergy">알레르기 정보</h4>
          <p>본 제품은 {idSynchro.allergy} 함유 제품입니다.</p>
          <p className="desLine desLine2"></p>
          <p>
            <button className="orderBtn">장바구니</button>
          </p>
          {
            notice == true ?
            <p className="notice">곧 사라져요~! 지금 주문시 포인트적립이 <span>2배!</span></p>
            : <p className="noticeOff">곧 사라져요~ 지금 주문시 포인트적립이 <span>2배!</span></p>
          }
        </div>
      </div>
      <div className="underDetail">
        <div className="review">
          <h2>원산지 정보</h2>
          <p>{idSynchro.resource}</p>
        </div>
        <div className="nutrition">
          <table>
            <thead>
              <tr>
                <th className='leftNutriTitle'>1회 영양성분</th>
                <th className='rightNutriTitle'>100g당</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className='leftNutri'>칼로리</th>
                <th className='rightNutri'>{idSynchro.kcal}kcal</th>
              </tr>
              <tr>
                <th className='leftNutri'>나트륨</th>
                <th className='rightNutri'>{idSynchro.sodium}mg</th>
              </tr>
              <tr>
                <th className='leftNutri'>당류</th>
                <th className='rightNutri'>{idSynchro.sugars}g</th>
              </tr>
              <tr>
                <th className='leftNutri'>포화지방</th>
                <th className='rightNutri'>{idSynchro.fat}g</th>
              </tr>
              <tr>
                <th className='leftNutri'>단백질</th>
                <th className='rightNutri'>{idSynchro.protein}g</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='heightLine'></div>
      <div className='recommend'>
        <h1>OUR ALL PRODUCTS</h1>
        <div className="cardContainer">
          {
            allPang.map((a, i) => {
              return(
                <Card allPang={allPang[i]}></Card>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

function Card({allPang}){
  return (
    <div className="eachCard">
      <img src={process.env.PUBLIC_URL + allPang.image}/>
      <p>{allPang.title}</p>
    </div>
  )
};



export default Detail;