import React from "react";

const Modal = ({ movieData }) => {
  return (
    <div className="modalBg">
    <button>X</button>
      <div className="title">
        <h6>{movieData.original_title}</h6>
      </div>
      <div className="body">
        <p>{movieData.overview}</p>
      </div>
      <div className="footer">
        <button>cancel</button>
      </div>
    </div>
  );
};

export default Modal;
