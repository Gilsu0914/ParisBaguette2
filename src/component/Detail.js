import react from 'react';
import { useParams } from 'react-router-dom';

function Detail({pang}){

  let {id} = useParams();//유저가 url파라미터에 입력한 것을 가져오려면 useParams()

  return (
    <div className="Detail">
      <div className='upDetail'>
        <div className="imgContainer">
          <img className="detailImage" src={process.env.PUBLIC_URL + pang[id].image }/>
        </div>
        <div className="description">
          <h1>{pang[id].title}</h1>
          <h4>{pang[id].content}</h4>
          <p>{pang[id].price}</p>
          <p className='desLine desLine1'></p>
          <h4 className="allergy">알레르기 정보</h4>
          <p>본 제품은 밀, 대두가 함유되어 있습니다.</p>
          <p className='desLine desLine2'></p>
          <p><button className="orderBtn">주문하기</button></p>
        </div>
      </div>
    </div>
  );
};
export default Detail;