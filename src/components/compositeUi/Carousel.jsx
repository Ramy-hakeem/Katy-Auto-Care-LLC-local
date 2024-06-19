

import { useEffect, useRef, useState } from "react";
import BackArrowIcon from "../../assets/BackArrowIcon";
import ForwordArrowIcon from "../../assets/ForwordArrowIcon";
import PropTypes from 'prop-types';

function Carousel({ cards, arrowIsUnder }) {
  const [leftArrowColor, setLeftArrowColor] = useState("#F80606")
  const [rightArrowColor, setRightArrowColor] = useState("#F80606")
  useEffect(() => {
    // Set initial scroll position here
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef?.current?.scrollWidth / 2
    }
  }, [])
  const scrollRef = useRef(null)
  const data = Array(12).fill(cards)
  const totalWidth = scrollRef?.current?.scrollWidth
  const cardWidth = Math.ceil(totalWidth / data.length)
  const CardsPerScreen = 3
  const onScrollHandler = (e) => {
    if (scrollRef?.current?.scrollLeft == 0) {
      e?.target?.classList.remove("scroll-smooth")
      e?.target?.classList.contains("scroll-auto")
      scrollRef.current.scrollLeft = totalWidth / 2
      e?.target?.classList.remove("scroll-auto")
      e?.target?.classList.add("scroll-smooth")
    } else if (scrollRef?.current?.scrollLeft >= totalWidth - CardsPerScreen * cardWidth) {
      e?.target?.classList.remove("scroll-smooth")
      e?.target?.classList.contains("scroll-auto")
      scrollRef.current.scrollLeft = totalWidth / 2 + - CardsPerScreen * cardWidth
      e?.target?.classList.remove("scroll-auto")
      e?.target?.classList.add("scroll-smooth")
    }
  }
  const onClickHandler = (e) => {
    scrollRef.current.scrollLeft += e.currentTarget.id === "right" ? cardWidth : -cardWidth;
  };







  return (
    <div className={`flex justify-between  items-center w-full ${arrowIsUnder && "flex-col"}`}>
      <div
        id="left"

        className={`text-xl md:text-5xl cursor-pointer border border-flame border-s-3 hover:bg-flame  w-12 h-12 rounded-[50%] flex justify-center items-center transition duration-400 ease-in-out ${arrowIsUnder && "hidden"}`}
        onClick={onClickHandler}
        onMouseEnter={() => setLeftArrowColor("white")}
        onMouseLeave={() => setLeftArrowColor("#F80606")}

      >
        <BackArrowIcon color={leftArrowColor} />
      </div>


      <div
        ref={scrollRef}
        onScroll={onScrollHandler}
        className=" flex flex-nowrap justify-around items-center overflow-x-hidden w-[90%] scroll-smooth no-scrollbar snap-x snap-mandatory">
        {
          data.map((card, index) => (

            <div key={index} className="  snap-start flex justify-center items-center flex-shrink-0 w-1/3 t:w-1/2" >
              {card}
            </div>

          ))
        }

      </div>





      <div
        id="right"
        className={`text-xl md:text-5xl cursor-pointer border border-flame border-s-3 hover:bg-flame  w-12 h-12 rounded-[50%] flex justify-center items-center transition duration-400 ease-in-out  ${arrowIsUnder && "hidden"}`}
        onClick={onClickHandler}
        onMouseEnter={() => setRightArrowColor("white")}
        onMouseLeave={() => setRightArrowColor("#F80606")}
      >
        <ForwordArrowIcon color={rightArrowColor} />
      </div>



      <div className="flex justify-center items-center  mt-5 gap-10">
        <div
          id="left"
          className={`text-xl md:text-5xl cursor-pointer border border-flame border-s-3 hover:bg-flame  w-12 h-12 rounded-[50%] flex justify-center items-center transition duration-400 ease-in-out ${!arrowIsUnder && "hidden"}`}
          onClick={onClickHandler}
          onMouseEnter={() => setLeftArrowColor("white")}
          onMouseLeave={() => setLeftArrowColor("#F80606")}
        >
          <BackArrowIcon color={leftArrowColor} />
        </div>
        <div
          id="right"
          className={`text-xl md:text-5xl cursor-pointer border border-flame border-s-3 hover:bg-flame  w-12 h-12 rounded-[50%] flex justify-center items-center transition duration-400 ease-in-out  ${!arrowIsUnder && "hidden"}`}
          onClick={onClickHandler}
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
export default Carousel
