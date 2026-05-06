import { useState } from "react";
import { Cat } from "lucide-react";
import "./Action.css";

export default function MeowRating({ rating = 0, onChange}) {
  const [hover, setHover] = useState(0);

  return (
    <div className="meow-wrapper">
      {[1, 2, 3, 4, 5].map((meow) => {
        const active =  rating >= meow;

        return (
          <Cat
            key={meow}
            size={28}
            className={`meow ${active ? "active" : ""}`}
            onClick={() => onChange(meow)}
          />
        );
      })}
    </div>
  );
}
