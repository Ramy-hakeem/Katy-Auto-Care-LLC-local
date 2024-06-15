// import { useState } from "react";
// import BackArrowIcon from "../../assets/BackArrowIcon";
// import ForwordArrowIcon from "../../assets/ForwordArrowIcon";
// function Carousel() {
//   const initialState = [
//     { idx: 1, pos: 1, text: "1", active: true },
//     { idx: 2, pos: 2, text: "2", active: true },
//     { idx: 3, pos: 3, text: "3", active: true },
//     { idx: 4, pos: 4, text: "4", active: false },
//   ];
//   const [leftArrowColor, setLeftArrowColor] = useState("#F80606")
//   const [rightArrowColor, setRightArrowColor] = useState("#F80606")
//   const [cards, setCards] = useState(initialState);

//   const handleLeftClick = () => {
//     setCards(prevCards => {
//       const activeCards = prevCards.filter(card => card.active);
//       const nextCardIdx = activeCards.sort((a, b) => a.pos - b.pos)[0].idx;

//       return prevCards.map(card => {
//         if (!card.active) {
//           return { ...card, active: true };
//         } else if (card.idx === nextCardIdx) {
//           return { ...card, active: false, pos: Math.max(...prevCards.map(c => c.pos)) + 1 };
//         }
//         return card;
//       });
//     });
//   };

//   const handleRightClick = () => {
//     setCards(prevCards => {
//       const activeCards = prevCards.filter(card => card.active);
//       const nextCardIdx = activeCards.sort((a, b) => a.pos - b.pos).pop().idx;

//       return prevCards.map(card => {
//         if (!card.active) {
//           return { ...card, active: true, pos: Math.min(...prevCards.map(c => c.pos)) - 1 };
//         } else if (card.idx === nextCardIdx) {
//           return { ...card, active: false };
//         }
//         return card;
//       });
//     });
//   };

//   return (
//     <div className="flex justify-between px-5 items-center w-full h-screen">
//       <div
//         className={`text-xl md:text-5xl cursor-pointer border border-flame border-s-3 hover:bg-flame  w-12 h-12 rounded-[50%] flex justify-center items-center transition duration-400 ease-in-out`}
//         onClick={handleRightClick}
//         onMouseEnter={() => setLeftArrowColor("white")}
//         onMouseLeave={() => setLeftArrowColor("#F80606")}
//       >
//         <BackArrowIcon color={leftArrowColor} />
//       </div>
//       {cards
//         .filter(card => card.active)
//         .sort((a, b) => a.pos - b.pos)
//         .map((card, index) => (
//           <div key={index}>
//             {card.text}
//           </div>
//         ))}
//       <div
//         className={`text-xl md:text-5xl cursor-pointer border border-flame border-s-3 hover:bg-flame  w-12 h-12 rounded-[50%] flex justify-center items-center transition duration-400 ease-in-out`}
//         onClick={handleLeftClick}
//         onMouseEnter={() => setRightArrowColor("white")}
//         onMouseLeave={() => setRightArrowColor("#F80606")}
//       >
//         <ForwordArrowIcon color={rightArrowColor} />
//       </div>
//     </div>
//   );
// }

// export default Carousel;

import { useRef, useState } from "react";
import BackArrowIcon from "../../assets/BackArrowIcon";
import ForwordArrowIcon from "../../assets/ForwordArrowIcon";
import OfferCard from "./OfferCard";

function Carousel() {
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
    <div className="flex justify-between !mt-300  items-center w-full">
      <div
        className={`text-xl md:text-5xl cursor-pointer border border-flame border-s-3 hover:bg-flame  w-12 h-12 rounded-[50%] flex justify-center items-center transition duration-400 ease-in-out`}
        onClick={handleToLeft}
        onMouseEnter={() => setLeftArrowColor("white")}
        onMouseLeave={() => setLeftArrowColor("#F80606")}
      >
        <BackArrowIcon color={leftArrowColor} />
      </div>


      <div ref={scrollRef} className=" flex flex-nowrap justify-around items-center overflow-x-auto w-[90%] scroll-smooth no-scrollbar">
        <div className="flex justify-center items-center flex-shrink-0 w-1/3" >
          <OfferCard />
        </div>
        <div className=" flex justify-center items-center flex-shrink-0 w-1/3" >
          <OfferCard />
        </div>
        <div className="flex justify-center items-center flex-shrink-0 w-1/3" >
          <OfferCard />
        </div>
        <div className=" flex justify-center items-center flex-shrink-0 w-1/3" >
          <OfferCard />
        </div>


      </div>





      <div
        className={`text-xl md:text-5xl cursor-pointer border border-flame border-s-3 hover:bg-flame  w-12 h-12 rounded-[50%] flex justify-center items-center transition duration-400 ease-in-out`}
        onClick={handleToRight}
        onMouseEnter={() => setRightArrowColor("white")}
        onMouseLeave={() => setRightArrowColor("#F80606")}
      >
        <ForwordArrowIcon color={rightArrowColor} />
      </div>
    </div>
  );
}

export default Carousel;
