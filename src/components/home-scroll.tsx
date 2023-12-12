import { useRef, useState, useEffect } from "react";
import ScrollButton from "./scroll-button";
import Teaser from "./teaser";
import Home from "../assets/radicle/Home.png";

const projects = [
  {
    title: "Radicle Redesign",
    teaser: (
      <div className="relative h-fit w-1/2">
        <img src={Home} />
        <div className="absolute -left-4 -top-4 flex h-full w-full flex-col gap-3">
          <div className="border-foreground-contrast h-fit w-full border-4 p-1.5">
            <p className="bg-foreground-contrast h-fit w-fit p-1.5 italic">App</p>
          </div>
          <div className="border-foreground-contrast flex h-full w-full gap-3">
            <div className="border-foreground-contrast h-full w-1/5 border-4 p-1.5">
              <p className="bg-foreground-contrast h-fit w-fit p-1.5 italic">Project</p>
            </div>
            <div className="border-foreground-contrast h-full w-4/5 border-4 p-1.5">
              <p className="bg-foreground-contrast h-fit w-fit p-1.5 italic">Content</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  { title: "Radicle Design System", teaser: null },
  { title: "Polkadot Design System", teaser: null },
];

export default function HomeScroll() {
  const scrollRef = useRef(null);
  const [scrollDownVisible, setScrollDownVisible] = useState(true);
  const [scrollUpVisible, setScrollUpVisible] = useState(false);

  // Function to check if the scroll is at the bottom
  const checkScrollBottom = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;

      // Check if the user has scrolled to the bottom
      const isBottom = scrollTop + clientHeight >= scrollHeight - screen.height * 0.5;

      const isTop = scrollTop < screen.height * 0.5;

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
      <div ref={scrollRef} className="h-screen snap-y snap-mandatory overflow-scroll">
        {projects.map((project, index) => (
          <Teaser title={project.title} key={index}>
            {project.teaser}
          </Teaser>
        ))}
      </div>
      <ScrollButton visible={scrollDownVisible} direction="down" />
      <ScrollButton visible={scrollUpVisible} direction="up" />
    </>
  );
}
