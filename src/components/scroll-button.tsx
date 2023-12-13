export default function ScrollButton({
  visible,
  direction,
}: {
  visible: boolean;
  direction: "up" | "down";
}) {
  return (
    <div
      onClick={() => {
        const el = document.querySelector(".snap-mandatory");
        el?.scrollBy({ top: direction === "down" ? 100 : -100, behavior: "smooth" });
      }}
      className={`border-foreground-contrast absolute cursor-pointer ${
        direction === "down" ? "bottom-16" : "top-16"
      } left-[50%] h-12 w-12 rounded-full border transition-opacity duration-150 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}
