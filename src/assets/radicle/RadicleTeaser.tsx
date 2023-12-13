import Home from "./Home.png";

let x: number;
let y: number;
let entryX: number;
let entryY: number;

export default function RadicleTeaser() {
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
      imageContainer.style.left = `${-12 + x / 72}px`;
      imageContainer.style.top = `${-12 + y / 72}px`;
    }
  }

  function returnToStart() {
    if (imageContainer) {
      imageContainer.style.transition = "all 0.5s ease";
      imageContainer.style.left = `-12px`;
      imageContainer.style.top = `-12px`;
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
      <>
        <img src={Home} />
        <div
          id="image-container"
          className="trasnsition-all absolute -left-4 -top-4 flex h-full w-full flex-col gap-3"
        >
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
      </>
    </div>
  );
}
