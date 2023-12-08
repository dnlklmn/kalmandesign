import { useState, useRef, useEffect } from "react";
import Teaser from "./components/teaser";
import ScrollButton from "./components/scroll-button";

const projects = ["Radicle Redesign", "Radicle Design System", "Polkadot Design System"];

function App() {
  const scrollRef = useRef(null);
  const [scrollDownVisible, setScrollDownVisible] = useState(true);
  const [scrollUpVisible, setScrollUpVisible] = useState(false);

  // Function to check if the scroll is at the bottom
  const checkScrollBottom = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;

      // Check if the user has scrolled to the bottom
      const isBottom = scrollTop + clientHeight >= scrollHeight;

      const isTop = scrollTop === 0;

      if (isBottom) {
        // Do something when the user has reached the bottom, e.g., load more content
        setScrollDownVisible(false);
      } else {
        setScrollDownVisible(true);
      }

      if (isTop) {
        // Do something when the user has reached the bottom, e.g., load more content
        setScrollUpVisible(false);
      } else {
        setScrollUpVisible(true);
      }
    }
  };

  useEffect(() => {
    const scrollableElement: null | any = scrollRef.current;

    // Attach the scroll listener
    if (scrollableElement) {
      scrollableElement.addEventListener("scroll", checkScrollBottom);
    }

    // Return a cleanup function to remove the event listener
    return () => {
      if (scrollableElement) {
        scrollableElement.removeEventListener("scroll", checkScrollBottom);
      }
    };
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <>
      <div className="font-iaB absolute flex h-16 w-full items-center justify-between p-6">
        <h6 className="text-foreground-contrast">DANIEL KALMAN</h6>
        <h6 className="text-foreground-secondary">ABOUT</h6>
      </div>
      <div ref={scrollRef} className="h-screen snap-y snap-mandatory overflow-scroll">
        {projects.map((project, index) => (
          <Teaser title={project} key={index} />
        ))}
      </div>

      <ScrollButton visible={scrollDownVisible} direction="down" />
      <ScrollButton visible={scrollUpVisible} direction="up" />
    </>
  );
}

export default App;
