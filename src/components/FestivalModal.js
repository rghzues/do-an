import "./FestivalModal.css";
import { createPortal } from "react-dom";
import { useState } from "react";

export default function FestivalModal({ item, onClose }) {
  const [showPdf, setShowPdf] = useState(false);
  if (!item) return null;

  return createPortal(
    <div
      className="modal-overlay"
      onClick={() => {
        onClose();
        setShowPdf(false);
      }}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="close-btn"
          onClick={() => {
            onClose();
            setShowPdf(false);
          }}
        >
          x
        </button>

        <div className="modal-card">
          <div className="modal-img">
            <img src={item.images[0]} alt={item.name} />
          </div>

          <div className="modal-info">
            <h2>{item.name}</h2>

            <p>
              <i className="fa-solid fa-earth-europe"></i> {item.country}
            </p>

            <p>
              <i className="fa-solid fa-mosque"></i> {item.religion}
            </p>

            <p>
              <i className="fa-solid fa-calendar-days"></i> {item.month}
            </p>
          </div>

          <div className="description">
            <p>{item.description}</p>
            <button onClick={() => setShowPdf(!showPdf)}>
              {showPdf ? "Ẩn" : "Chi tiết"}
            </button>
            <a href={`/files/${item.file}`} target="_blank">
              Open PDF
            </a>
          </div>
        </div>
      </div>
      {showPdf && (
        <iframe
          src={`/files/${item.file}`}
          width="100%"
          height="100%"
          title="PDF"
        />
      )}
    </div>,
    document.body,
  );
}
