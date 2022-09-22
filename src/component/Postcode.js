import react, {useState} from 'react';
import DaumPostcode from 'react-daum-postcode';
import Modal from 'react-modal';

function Postcode({sumAll}){

  let [zipCode, setZipCode] = useState('');
  let [roadAddress, setRoadAddress] = useState('');
  let [detailAddress, setDetailAddress] = useState('')
  let [isOpen, setIsOpen] = useState(false)

  //complete시 자료 state에 담기
  const completeHandler = (data)=>{
    setZipCode(data.zonecode);
    setRoadAddress(data.roadAddress);
    setIsOpen(false);
  }
  //검색 클릭
  const toggle = ()=>{
    setIsOpen(!isOpen);
  }
  //상세주소검색 이벤트
  const changeHandler = (e)=>{setDetailAddress(e.target.value)}
  //모달스타일
  let optimizedStyle ={
    overlay: {backgroundColor: "rgba(0,0,0,0.5)"},
    content: {
      margin: "auto",
      padding: "0",
      overflow: "hidden",
    },
  }
  
  return (
    <div>
      <h4>수령인 정보</h4>
      <table className="reciever">
        <tbody>
          <tr>
            <th>받으시는분</th>
            <td>
              <input className="recieverName" type="text" maxLength={8} />
            </td>
          </tr>
          <tr>
            <th>연락처</th>
            <td>
              <input
                className="phoneNum"
                type="text"
                placeholder="번호만 입력"
                maxLength={12}
              />
            </td>
          </tr>
          <tr>
            <th>주소</th>
            <td>
              <div>
                <input value={zipCode} readOnly placeholder='우편번호' className="postNum"/>
                <span onClick={toggle} className="searchPost">/ 우편번호찾기</span>
              </div>
              <div>
                <input value={roadAddress} readOnly placeholder='도로명 주소' className="post" type="text" />
              </div>
              <Modal style={optimizedStyle} isOpen={isOpen} ariaHideApp={false}>
                <DaumPostcode onComplete={completeHandler} />
              </Modal>
              <div>
                <input onChange={changeHandler} value={detailAddress} placeholder='상세주소' className="post" type="text" />
              </div>
            </td>
          </tr>
          <tr>
            <th>요청사항</th>
            <td>
              <input className="request" type="text" maxLength={40} placeholder="예시. 배송 전에 미리 연락 바랍니다."/>
              <p className="underRequest">총 40자 이내로 작성</p>
            </td>
          </tr>
        </tbody>
      </table>
      <h4>결제 선택</h4>
      <table className="payment">
        <tbody>
          <tr>
            <th>총 결제금액</th>
            <td className="sumAll">{sumAll.toLocaleString("ko-KR")}원 <span className="underRequest"> (배송비 3,000원 포함)</span></td>
          </tr>
          <tr>
            <th>결제방법</th>
            <td>
              <input className="credit" type="radio" name="payment" checked="checked"/> 신용카드
              <span className="space"></span>
              <input className="credit kakaopay" type="radio" name="payment" /> 카카오페이
            </td>
          </tr>
        </tbody>
      </table>
      <div className="checkPay">
        <input type="checkbox" />
        <p>결제 서비스 약관에 동의하며, 원활한 배송을 위해 개인정보 제공에 동의합니다.</p>
      </div>
      <div className="orderArea">
        <button className="orderBtn2">주문하기</button>
      </div>
    </div>
  );
};


export default Postcode;