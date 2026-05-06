import { Link } from "react-router-dom";
import "./Title.css";
import { Accessibility, ChevronsRight } from "lucide-react";

export function Br({ br = 1 }) {
  return (
    <>
      {[...Array(Number(br))].map((_, i) => (
        <br key={i} />
      ))}
    </>
  );
}

export const Title = ({
  name = "",
  nameup = "",
  namedown = "",
  up = 0,
  down = 0,
  hr = "",
}) => {
  return (
    <div className="body">
      {hr && (
        <>
          <Br br={up} />

          <div className="top">
            <p className="label"> {nameup}</p>
            <h3 className="heading">{name}</h3>
            <p className="desc">{namedown}</p>
          </div>
          <Br br={down} />
        </>
      )}

      <div className="hr">
        <hr />
      </div>

      {!hr && (
        <>
          <Br br={up} />

          <div className="top">
            <p className="label"> {nameup}</p>
            <h3 className="heading">{name}</h3>
            <p className="desc">{namedown}</p>
            {name && (
              <Link className="link-title" to="/festivals">
                Xem tất cả lễ hội
                <ChevronsRight />
                <Accessibility />
              </Link>
            )}
          </div>

          <Br br={down} />
        </>
      )}
    </div>
  );
};

export const SectionTitle = ({ name = "", up = 0, down = 0 }) => {
  return (
    <div className="body">
      <Br br={up} />

      <div className="css">
        <div>
          <h4 className="section-title">{name}</h4>
        </div>

        <Link className="link-title" to="/festivals">
          Xem tất cả lễ hội
          <ChevronsRight />
          <Accessibility />
        </Link>
      </div>
      <Br br={down} />
    </div>
  );
};
