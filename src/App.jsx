import { longList } from "./data";
import List from "./components/List";
import Buttons from "./components/Buttons";
import { useEffect, useState } from "react";
import SlickCarousel from "./SlickCarousel";

const App = () => {
  const [order, setOrder] = useState(0);

  const handleClick = (backwards) => {
    console.log("function");
    if (backwards) {
      setOrder((oldOrder) => {
        const newOrder = (oldOrder - 1 + longList.length) % longList.length;
        return newOrder;
      });
    } else {
      setOrder((oldOrder) => {
        const newOrder = (oldOrder + 1) % longList.length;
        return newOrder;
      });
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setOrder((oldOrder) => {
        const newOrder = (oldOrder + 1) % longList.length;
        return newOrder;
      });
    }, 3000);
    return () => {
      clearInterval(timeOut);
    };
  }, [order]);

  return (
    <main>
      <section className="slider-container">
        <List list={longList} order={order}></List>
        <Buttons func={handleClick}></Buttons>
      </section>
    </main>
  );
};
export default App;
