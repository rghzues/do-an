import React, { useMemo } from "react";
import "./Gallery.css";
import FestivalCard from "../components/FestivalCard";
import { useData } from "../kotex/HookContext";

function Gallery() {
  const {festivals} = useData();

  const gallery = useMemo(
    () =>
      [...festivals].sort(
        (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt),
      ),
    [festivals],
  );

  const layouts = ["left", "", "", "right", "down-right", "wide", "down-left"];

  return (
    <section className="gallery">
      <div className="gallery-grid">
        {layouts.map((Position, index) =>
          gallery[index] ? (
            <div key={gallery[index].id} className={`gallery-card ${Position}`}>
              <FestivalCard item={gallery[index]} Status="gallery" />
            </div>
          ) : null,
        )}
      </div>
    </section>
  );
}

export default Gallery;
