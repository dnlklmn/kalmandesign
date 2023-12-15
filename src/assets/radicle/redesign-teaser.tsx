import { Link } from "react-router-dom";
import Home from "./Home.png";

let x: number;
let y: number;
let entryX: number;
let entryY: number;

const imageContainer: HTMLElement | null = document.getElementById("image-container");

export default function RadicleRedesignTeaser({ linkTo }: { linkTo: string }) {
  function registerEntry(event: React.MouseEvent<HTMLDivElement>) {
    // Get position of the cursor within the div.
    entryX = event.clientX;
    entryY = event.clientY;
    console.log("registerEntry: ", entryX, entryY);
  }

  function followCursor(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    x = event.clientX - entryX; // X position within the div.
    y = event.clientY - entryY; // Y position within the div.}

    if (imageContainer) {
      imageContainer.style.transition = "all 0s ease";
      imageContainer.style.left = `${-8 + x / 72}px`;
      imageContainer.style.top = `${-8 + y / 72}px`;
      console.log("followCursor: ", x, y);
    }
  }

  function returnToStart() {
    if (imageContainer) {
      imageContainer.style.transition = "all 0.5s ease";
      imageContainer.style.left = `-8px`;
      imageContainer.style.top = `-8px`;
      console.log("returnToStart");
    }
  }

  return (
    <div id="tracking-div" className="relative h-fit w-1/2">
      <Link to={linkTo}>
        <>
          <img src={Home} />
          <div
            style={{ left: x }}
            id="image-container"
            className="trasnsition-all absolute -left-2 -top-2 flex h-full w-full flex-col gap-2"
            onPointerMove={followCursor}
            onMouseOut={returnToStart}
            onMouseEnter={registerEntry}
          >
            <div className="border-foreground-contrast h-fit w-full border-4 p-1">
              <p className="bg-foreground-contrast h-fit w-fit p-1 italic">App</p>
            </div>
            <div className="border-foreground-contrast flex h-full w-full gap-2">
              <div className="border-foreground-contrast h-full w-1/5 border-4 p-1">
                <p className="bg-foreground-contrast h-fit w-fit p-1 italic">Project</p>
              </div>
              <div className="border-foreground-contrast h-full w-4/5 border-4 p-1">
                <p className="bg-foreground-contrast h-fit w-fit p-1 italic">Content</p>
              </div>
            </div>
          </div>
        </>
      </Link>
    </div>
  );
}
