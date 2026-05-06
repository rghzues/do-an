import { useState } from "react";
import "./FestivalFeatured.css";
import FestivalModal from "./FestivalModal";

export default function FestivalFeatured({ item }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="festival-featured" onClick={() => setSelected(item)}>
        <div className="img-box">
          <img src={item.images[0]} alt={item.name} />
        </div>

        <div className="info">
          <h3>{item.name}</h3>
          <p>{item.country}</p>
        </div>
      </div>
      <FestivalModal item={selected} onClose={() => setSelected(null) } />
    </>
  );
}
