import { useState } from "react";
import arrow from "../assets/arrow_down.svg";
import "../styles/Collapse.css";

function Collapse({ title, content }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="wrapper">
      <div className="accordion">
        <div
          onClick={() => setToggle(!toggle)}
          className="toggle-handler-container"
        >
          <div className="title-container">
            <h2 className="title">{title}</h2>
            <span>
              {toggle ? (
                <img src={arrow} alt="fléche" className="active"></img>
              ) : (
                <img src={arrow} alt="fléche" className="inactive"></img>
              )}
            </span>
          </div>
          <div className={toggle ? `content show ` : `content `}>
            <p className="content-paragraph">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collapse;
