import { Rat } from "lucide-react";
import "./Action.css";

export const TomAndJerry = ({ down = 0 }) => {
  return (
    <div className="body">
      <div className="cat">
        <i style={{ fontSize: "30px" }} class="fa-solid fa-cat"></i>
        <Rat className="rat" size={23} />

        <i style={{ fontSize: "20px" }} class="fa-solid fa-cat"></i>
        <Rat className="rat" size={14} />

        <i style={{ fontSize: "10px" }} class="fa-solid fa-cat"></i>
        <Rat className="rat" size={10} />
      </div>
      <span className="adidat">adidat</span>
    </div>
  );
};
