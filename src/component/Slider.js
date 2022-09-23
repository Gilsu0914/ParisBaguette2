import data from "../data";

function Slider({dataSlider, slideRef, slideCount, setSlideCount, handleSlider }){
  return(
  <div className="sliderOuter">
    <h2>진행중인 이벤트</h2>
    <ul className="sliderContainer" ref={slideRef}>
      {
        dataSlider.map((a, i)=>{
          return(
            <li className="slide" key={i}>
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
            <button key={i} onClick={()=>{
              handleSlider(i);
              setSlideCount(i + 1)
            }}
            className={ i + 1 == slideCount ? 'activeBtn' : 'numBtn'}
            > </button>
          )
        })
      }
    </div>
  </div>
  )
};
export default Slider;