

import { useRef, useState } from "react";
import BackArrowIcon from "../../assets/BackArrowIcon";
import ForwordArrowIcon from "../../assets/ForwordArrowIcon";
import PropTypes from 'prop-types';

function Carousel({ cards, arrowIsUnder }) {
  const scrollRef = useRef(null)
  const [leftArrowColor, setLeftArrowColor] = useState("#F80606")
  const [rightArrowColor, setRightArrowColor] = useState("#F80606")

  const handleToRight = () => {
    scrollRef.current.scrollLeft += 500
  }
  const handleToLeft = () => {
    scrollRef.current.scrollLeft -= 500
  }


  return (
    <div className={`flex justify-between !mt-300  items-center w-full ${arrowIsUnder && "flex-col"}`}>
      <div
        className={`text-xl md:text-5xl cursor-pointer border border-flame border-s-3 hover:bg-flame  w-12 h-12 rounded-[50%] flex justify-center items-center transition duration-400 ease-in-out ${arrowIsUnder && "hidden"}`}
        onClick={handleToLeft}
        onMouseEnter={() => setLeftArrowColor("white")}
        onMouseLeave={() => setLeftArrowColor("#F80606")}
      >
        <BackArrowIcon color={leftArrowColor} />
      </div>


      <div ref={scrollRef} className=" flex flex-nowrap justify-around items-center overflow-x-auto w-[90%] scroll-smooth no-scrollbar">
        <div className="flex justify-center items-center flex-shrink-0 w-1/3" >
          {cards}
        </div>
        <div className=" flex justify-center items-center flex-shrink-0 w-1/3" >
          {cards}
        </div>
        <div className="flex justify-center items-center flex-shrink-0 w-1/3" >
          {cards}
        </div>
        <div className=" flex justify-center items-center flex-shrink-0 w-1/3" >
          {cards}
        </div>


      </div>





      <div
        className={`text-xl md:text-5xl cursor-pointer border border-flame border-s-3 hover:bg-flame  w-12 h-12 rounded-[50%] flex justify-center items-center transition duration-400 ease-in-out  ${arrowIsUnder && "hidden"}`}
        onClick={handleToRight}
        onMouseEnter={() => setRightArrowColor("white")}
        onMouseLeave={() => setRightArrowColor("#F80606")}
      >
        <ForwordArrowIcon color={rightArrowColor} />
      </div>



      <div className="flex justify-center items-center  mt-5 gap-10">
        <div
          className={`text-xl md:text-5xl cursor-pointer border border-flame border-s-3 hover:bg-flame  w-12 h-12 rounded-[50%] flex justify-center items-center transition duration-400 ease-in-out ${!arrowIsUnder && "hidden"}`}
          onClick={handleToLeft}
          onMouseEnter={() => setLeftArrowColor("white")}
          onMouseLeave={() => setLeftArrowColor("#F80606")}
        >
          <BackArrowIcon color={leftArrowColor} />
        </div>
        <div
          className={`text-xl md:text-5xl cursor-pointer border border-flame border-s-3 hover:bg-flame  w-12 h-12 rounded-[50%] flex justify-center items-center transition duration-400 ease-in-out  ${!arrowIsUnder && "hidden"}`}
          onClick={handleToRight}
          onMouseEnter={() => setRightArrowColor("white")}
          onMouseLeave={() => setRightArrowColor("#F80606")}
        >
          <ForwordArrowIcon color={rightArrowColor} />
        </div>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  cards: PropTypes.element.isRequired,
  arrowIsUnder: PropTypes.bool
}
export default Carousel;
