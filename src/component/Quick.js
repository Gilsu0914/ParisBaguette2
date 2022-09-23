import react from 'react';
import {useNavigate} from 'react-router-dom';

function Quick({scrollToTop}){
  
  let navigate = useNavigate();
  
  return (
  <div>  
    <div className="quick">
        <img className="sign" src={process.env.PUBLIC_URL + "/call.png"} />
    </div>
    <div className="quick2" onClick={() => {
      scrollToTop();
      navigate("/cart");
    }}>
    <img className="sign2" src={process.env.PUBLIC_URL + "/shopping-bag.png"}/>
    </div>
  </div>
  );
};
export default Quick;