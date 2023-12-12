import { useState, useRef, useEffect } from "react";
import Icon from "./icon";
import { Link } from "react-router-dom";

export default function Teaser({ title, children }: { title: string; children: React.ReactNode }) {
  const [inView, setInView] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setInView(entry.isIntersecting);
      },
      {
        root: null, // null means it observes changes in respect to the viewport
        rootMargin: `-${screen.height / 4}px`,
        threshold: 0.1, // 10% of the item's area is visible
      },
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    // Clean up the observer when the component unmounts or ref changes
    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, [componentRef]);

  return (
    <Link to={`/${title.split(" ").join("-").toLowerCase()}`}>
      <div
        ref={componentRef}
        className={`${
          inView ? "opacity-100" : "opacity-0"
        } flex h-screen w-full snap-start items-center justify-center gap-16 transition-opacity duration-300`}
      >
        <div className="flex w-1/4 flex-col gap-6 text-white">
          <div className="flex w-fit items-center justify-center rounded-full bg-white p-2">
            <Icon size={48} />
          </div>
          <div className="flex flex-col gap-1.5">
            <h2>{title}</h2>
            <h6 className="text-foreground-contrast">WEB APP</h6>
          </div>
          <p>
            Before relaunching the app we revamped the web app to increase consistency and help
            explain the concept of peer to peer code collaboration.
          </p>
          <p className="font-iaI">Coming soon...</p>
        </div>
        {children}
      </div>
    </Link>
  );
}
