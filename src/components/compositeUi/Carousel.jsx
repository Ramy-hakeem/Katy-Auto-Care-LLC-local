import { useEffect, useRef, useState } from "react";
import BackArrowIcon from "../../assets/BackArrowIcon";
import ForwordArrowIcon from "../../assets/ForwordArrowIcon";
import PropTypes from "prop-types";

function Carousel({ children = [], arrowIsUnder }) {
  const [leftArrowColor, setLeftArrowColor] = useState("#F80606");
  const [rightArrowColor, setRightArrowColor] = useState("#F80606");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 2;
    }
  }, []);

  const data = [...children, ...children];
  const totalWidth = scrollRef?.current?.scrollWidth;
  const cardWidth = Math.ceil(totalWidth / data.length);
  const cardsPerScreen = 3;

  const onScrollHandler = () => {
    const scrollLeft = scrollRef?.current?.scrollLeft;
    if (scrollLeft === 0) {
      scrollRef.current.classList.remove("scroll-smooth");
      scrollRef.current.scrollLeft = totalWidth / 2;
      scrollRef.current.classList.add("scroll-smooth");
    } else if (scrollLeft >= totalWidth - cardsPerScreen * cardWidth) {
      scrollRef.current.classList.remove("scroll-smooth");
      scrollRef.current.scrollLeft = totalWidth / 2 - cardsPerScreen * cardWidth;
      scrollRef.current.classList.add("scroll-smooth");
    }
  };

  const onClickHandler = (e) => {
    const direction = e.currentTarget.id === "right" ? 1 : -1;
    scrollRef.current.scrollLeft += direction * cardWidth;
  };

  return (
    <div className={`flex justify-between items-center w-full ${arrowIsUnder ? "flex-col" : ""}`}>
      <div
        id="left"
        className={`cursor-pointer border border-flame hover:bg-flame rounded-full flex justify-center items-center transition duration-400 ease-in-out ${arrowIsUnder ? "hidden" : ""}
        w-12 h-12  shrink-0 grow-0`}
        onClick={onClickHandler}
        onMouseEnter={() => setLeftArrowColor("white")}
        onMouseLeave={() => setLeftArrowColor("#F80606")}
      >
        <BackArrowIcon color={leftArrowColor} />
      </div>

      <div
        ref={scrollRef}
        onScroll={onScrollHandler}
        className="flex flex-nowrap justify-around items-center overflow-x-hidden w-[90%] scroll-smooth no-scrollbar snap-x snap-mandatory mx-3 "
      >
        {data.map((card, index) => (
          <div key={index} className="snap-start flex justify-center items-center flex-shrink-0 gap-2 w-full lg:w-1/2 2xl:w-1/3">
            {card}
          </div>
        ))}
      </div>

      <div
        id="right"
        className={`cursor-pointer border border-flame hover:bg-flame rounded-full flex justify-center items-center transition duration-400 ease-in-out ${arrowIsUnder ? "hidden" : ""}
        w-12 h-12 shrink-0`}
        onClick={onClickHandler}
        onMouseEnter={() => setRightArrowColor("white")}
        onMouseLeave={() => setRightArrowColor("#F80606")}
      >
        <ForwordArrowIcon color={rightArrowColor} />
      </div>

      {arrowIsUnder && (
        <div className="flex justify-center items-center mt-5 gap-10">
          <div
            id="left"
            className="cursor-pointer border border-flame hover:bg-flame w-12 h-12 rounded-full flex justify-center items-center transition duration-400 ease-in-out"
            onClick={onClickHandler}
            onMouseEnter={() => setLeftArrowColor("white")}
            onMouseLeave={() => setLeftArrowColor("#F80606")}
          >
            <BackArrowIcon color={leftArrowColor} />
          </div>
          <div
            id="right"
            className="cursor-pointer border border-flame hover:bg-flame w-12 h-12 rounded-full flex justify-center items-center transition duration-400 ease-in-out"
            onClick={onClickHandler}
            onMouseEnter={() => setRightArrowColor("white")}
            onMouseLeave={() => setRightArrowColor("#F80606")}
          >
            <ForwordArrowIcon color={rightArrowColor} />
          </div>
        </div>
      )}
    </div>
  );
}

Carousel.propTypes = {
  children: PropTypes.element,
  arrowIsUnder: PropTypes.bool,
};

export default Carousel;
