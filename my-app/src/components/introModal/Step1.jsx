import * as React from "react";
import "../../pages/Story/ModalStyle.css";

const ModalIntro1 = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{props.title}</h2>
        </div>
        <div className="modal-body">{props.children}</div>
      </div>
    </div>
  );
};

export default ModalIntro1;
