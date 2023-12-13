import { Link } from "react-router-dom";
import Patch from "./Patch.png";

let x: number;
let y: number;
let entryX: number;
let entryY: number;

export default function RadicleDesignSystem({ linkTo }: { linkTo: string }) {
  const imageContainer: HTMLElement | null = document.getElementById("image-container");

  function registerEntry(event: React.MouseEvent<HTMLDivElement>) {
    // Get position of the cursor within the div.
    entryX = event.clientX;
    entryY = event.clientY;
  }

  function followCursor(event: React.MouseEvent<HTMLDivElement>) {
    x = event.clientX - entryX; // X position within the div.
    y = event.clientY - entryY; // Y position within the div.}

    if (imageContainer) {
      imageContainer.style.transition = "all 0s ease";
      imageContainer.style.left = `${-8 + x / 72}px`;
      imageContainer.style.top = `${-8 + y / 72}px`;
    }
  }

  function returnToStart() {
    if (imageContainer) {
      imageContainer.style.transition = "all 0.5s ease";
      imageContainer.style.left = `-8px`;
      imageContainer.style.top = `-8px`;
    }
  }

  return (
    <div
      id="tracking-div"
      onMouseEnter={registerEntry}
      onMouseMove={followCursor}
      onMouseLeave={returnToStart}
      className="relative h-fit w-1/2"
    >
      <Link to={linkTo}>
        <>
          <img src={Patch} />
          <div
            id="image-container"
            className="trasnsition-all absolute -left-2 -top-2 flex h-full w-full flex-col gap-2"
          ></div>
        </>
      </Link>
    </div>
  );
}
