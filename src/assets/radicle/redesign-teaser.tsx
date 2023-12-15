import { Link } from "react-router-dom";
import Home from "./Home.png";
import { useState } from "react";

export default function RadicleRedesignTeaser({ linkTo }: { linkTo: string }) {
  const [entry, setEntry] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mouseOver, setMouseOver] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setPosition({
      x: e.nativeEvent.clientX,
      y: e.nativeEvent.clientY,
    });
    console.log("x: ", e.nativeEvent.clientX, "y: ", e.nativeEvent.clientY);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setEntry({ x: e.nativeEvent.clientX, y: e.nativeEvent.clientY }),
      console.log(
        "enter-x: ",
        e.nativeEvent.clientX,
        "enter-y: ",
        e.nativeEvent.clientY
      );
    setMouseOver(true);
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setEntry({ x: 0, y: 0 });
    setMouseOver(false);
  };
  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      id="tracking-div"
      className="relative w-1/2 h-fit "
    >
      <Link to={linkTo}>
        <>
          <img src={Home} />
          <div
            style={{
              left: `${-8 + (entry.x - position.x) / 72}px`,
              top: `${-8 + (entry.y - position.y) / 72}px`,
              pointerEvents: "none",
            }}
            id="image-container"
            className={`absolute flex h-full w-full flex-col gap-2 ${
              mouseOver
                ? "transition-none"
                : "trasnsition-all duration-300 ease-out"
            }`}
          >
            <div className="w-full p-1 border-4 border-foreground-contrast h-fit">
              <p className="p-1 italic bg-foreground-contrast h-fit w-fit">
                App
              </p>
            </div>
            <div className="flex w-full h-full gap-2 border-foreground-contrast">
              <div className="w-1/5 h-full p-1 border-4 border-foreground-contrast">
                <p className="p-1 italic bg-foreground-contrast h-fit w-fit">
                  Project
                </p>
              </div>
              <div className="w-4/5 h-full p-1 border-4 border-foreground-contrast">
                <p className="p-1 italic bg-foreground-contrast h-fit w-fit">
                  Content
                </p>
              </div>
            </div>
          </div>
          <script></script>
        </>
      </Link>
    </div>
  );
}
