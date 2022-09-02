import react from 'react';

function Footer(){
  return (
    <footer>
      <div className="innerFooter">
        <div className="info">
          <h2>Information</h2>
          <ul>
            <li>브랜드소개</li>
            <li>윤리신고센터</li>
            <li>채용</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
            <li>이메일수집거부</li>
          </ul>
        </div>
        <div className="contact">
          <h2>Contact Us</h2>
          <ul>
            <li>고객센터</li>
            <li>031-3345-7899</li>
            <li><span>월~금: 09시~18시</span></li>
            <li><span>토요일: 10시~14시</span></li>
          </ul>
        </div>
        <div className="follow">
          <h2>Follow Us</h2>
          <ul>
            <li><img className="icon" src={process.env.PUBLIC_URL + "/facebook.svg"}/></li>
            <li><img className="icon" src={process.env.PUBLIC_URL + "/insta.svg"}/></li>
            <li><img className="icon" src={process.env.PUBLIC_URL + "/youtube.svg"}/></li>
          </ul>
        </div>
      </div>
      <div className='underFooter'>
        <p>All Rights Reserved © 베이커리. 경기도 용인시 기흥구 흥덕4로 16번길 20-16 (주)베이커리</p>
      </div>
    </footer>
  );
};
export default Footer;