import react from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addCount, subtractCount, deleteItem } from './../store';

function Cart(){

  let state = useSelector((state)=>{return state})
  let dispatch = useDispatch();
  let sumAll = state.cart.reduce((prev, curr) => {return prev + curr.totalPrice}, 0) + 3000;
  
  return (
    <div className="Cart">
      <h2 className="componentHead">장바구니</h2>
      <h4>선택한 상품</h4>
      <table className="selected">
        <thead>
          <tr>
            <th>이미지</th>
            <th>상품</th>
            <th>수량</th>
            <th>변경</th>
            <th>가격</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => {
            return (
              <tr key={i}>
                <td className='justLeft cartImage'><img src={process.env.PUBLIC_URL + state.cart[i].image}/></td> {/* 이미지 */}
                <td>{state.cart[i].title}</td> {/* 상품 */}
                <td>{state.cart[i].count}</td> {/* 수량 */}
                <td>
                  <button className="countUp" onClick={()=>{ {/* 오름버튼 */}
                    dispatch(addCount(state.cart[i].id))
                  }}> ↑ </button>
                  <button className="countDown" onClick={()=>{ {/* 내림버튼 */}
                    if(state.cart[i].count > 1){
                      dispatch(subtractCount(state.cart[i].id))    
                    }
                    else if(state.cart[i].count = 1){
                      return 1;
                    }           
                  }}> ↓ </button>
                </td>
                <td>{state.cart[i].totalPrice.toLocaleString('ko-KR')}원</td> {/* 가격 */}
                <td> <button className='deleteBtn' onClick={()=>{ {/* 삭제 */}
                  dispatch(deleteItem())
                }}> ✕ </button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <i>배송비 3,000원 별도입니다.</i>
      <h4>수령인 정보</h4>
      <table className="reciever">
        <tbody>
          <tr>
            <th>받으시는분</th>
            <td>
              <input className="recieverName" type="text" maxLength={8}/>
            </td>
          </tr>
          <tr>
            <th>연락처</th>
            <td>
              <input className="phoneNum" type="text" placeholder="번호만 입력" maxLength={12}/>
            </td>
          </tr>
          <tr>
            <th>주소</th>
            <td>
              <div>
                <input className='postNum' type="text" />
                <span className='searchPost'>/ 우편번호찾기</span>
              </div>
              <div>
                <input className="post" type="text" />
              </div>
              <div>
                <input className="post"  type="text" />
              </div>
            </td>
          </tr>
          <tr>
            <th>주문시 요청</th>
            <td>
              <input className='request' type="text" maxLength={40} placeholder="예시. 배송 전에 미리 연락 바랍니다."/>
              <p className='underRequest'>총 40자 이내로 작성</p>
            </td>
          </tr>
        </tbody>
      </table>
      <h4>결제 선택</h4>
      <table className='payment'>
        <tbody>
          <tr>
            <th>총 결제금액</th>
            <td className="sumAll"> {sumAll.toLocaleString('ko-KR')}원 <span className='underRequest'> (배송비 3,000원 포함)</span></td>
          </tr>
          <tr>
            <th>결제방법</th>
            <td>
              <input className="credit" type="radio" name="payment"/> 신용카드
              <span className='space'></span> 
              <input className="credit kakaopay" type="radio" name="payment"/>카카오페이
            </td>
          </tr>
        </tbody>
      </table>
      <div className='checkPay'>
        <input type="checkbox"/>
        <p>결제 서비스 약관에 동의하며, 원활한 배송을 위해 개인정보 제공에 동의합니다.</p>
      </div>
      <div className="orderArea">
        <button className="orderBtn2">주문하기</button>
      </div>
    </div>
  );
};


export default Cart;