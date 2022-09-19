import react from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addCount, subtractCount, deleteItem } from './../store';
import Postcode from './Postcode';

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

      <Postcode sumAll={sumAll}/>
      
    </div>
  );
};


export default Cart;