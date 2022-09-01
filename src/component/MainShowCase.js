import react from 'react';

function MainShowCase({pang}){
  return (
    <div className='MainShowCase'>
      <div className="sort">
        <button className="expensiveBtn">높은가격순</button>
        <button className="chipBtn">낮은가격순</button>
        <button className="abcBtn">가나다순</button>
      </div>
      <div className="cardContainer">
        {
          pang.map((a, i) => {
          return <Card pang={pang[i]}></Card>;
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