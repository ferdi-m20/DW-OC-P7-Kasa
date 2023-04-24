import { useState } from "react";
import arrow from "../assets/arrow_down.svg";
import "../styles/Collapse.css";

function Collpase({ title, content }) {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="collapse">
        <h3 className="collapse-title" onClick={() => setToggle(!toggle)}>
          {title}
          <img
            className={
              toggle ? "arrow-effect arrow-up" : "arrow-effect arrow-down"
            }
            src={arrow}
            alt="flèche vers le bas ou le haut"
          />
        </h3>
        <div
          className={toggle ? "collapse-content" : "collapse-content-hidden"}
        >
          {Array.isArray(content)
            ? content.map((item, index) => {
                return <p key={index}>{item}</p>;
              })
            : content}
        </div>
      </div>
    </>
  );
}

export default Collpase;
