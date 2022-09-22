import data from "../data";
import React, {useState} from 'react';

function Slider({dataSlider, slideRef, slideCount, handleSlider }){
  return(
  <div className="sliderOuter">
    <h2>진행중인 이벤트</h2>
    <ul className="sliderContainer" ref={slideRef}>
      {
        dataSlider.map((a, i)=>{
          return(
            <li className="slide" key={dataSlider.id}>
              <img src={ process.env.PUBLIC_URL + `/rollout${i + 1}.png`} className="optimDesk"/>
              <img src={ process.env.PUBLIC_URL + `/rolloutPhone${i + 1}.png` } className="optimPhone"/>
            </li>
          )
        })
      }
    </ul>
    <div className="buttonContainer">
      {
        dataSlider.map((a, i)=>{
          return(
            <button onClick={()=>{
              handleSlider(i);
            }}
            className={i == (slideCount - 1) ? 'activeBtn' : 'numBtn'}
            >{i + 1}</button>
          )
        })
      }
    </div>
  </div>
  )
};
export default Slider;