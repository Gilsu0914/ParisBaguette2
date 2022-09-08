import react from 'react';
import { useSelector } from 'react-redux';

function Cart(){

  let state = useSelector((state)=>{return state})
  console.log(state);
  
  return (
    <div className="Cart">
      <h2 className="componentHead">장바구니</h2>
      <h4>선택한 상품</h4>
      <table className="selected">
        <thead>
          <tr>
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
                <td>{state.cart[i].title}</td>
                <td>{state.cart[i].count}개</td>
                <td>
                  <button className="countUp"> ↑ </button>
                  <button className="countDown"> ↓ </button>
                </td>
                <td>{state.cart[i].price}</td>
                <td>삭제</td>
              </tr>
            );
          })}
        </tbody>
      </table>
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
            <td>얼마얼마</td>
          </tr>
          <tr>
            <th>결제방법</th>
            <td>
              <input className="credit" type="radio" /> 신용카드
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