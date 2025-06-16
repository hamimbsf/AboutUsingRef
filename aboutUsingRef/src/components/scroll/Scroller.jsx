import { useRef } from "react";
import "./scroller.css";

const Scroller = () => {
  const scroll = useRef(null);

  const handleScroll = () => {
    scroll.current.scrollIntoView();
  };
  return (
    <div className="scroll-page">
      <section className="box box1">
        <button onClick={handleScroll} className="scrollBtn">
          Scroll
        </button>
      </section>

      <section className="box box2"></section>

      <section ref={scroll} className="box box3"></section>
    </div>
  );
};

export default Scroller;
