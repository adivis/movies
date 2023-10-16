import React from "react";

const Modal = ({ movieData, setOpenModal }) => {
  return (
    <div className="modalBg">
      <div className="container">
        <div className="closeBtn">
          <button onClick={() => setOpenModal(false)}>X</button>
        </div>
        <div className="title">
          <h6>{movieData.original_title}</h6>
        </div>
        <div className="body">
          <div className="details">
            <p>Release Date:{movieData.release_date}</p>
            <p>Time:{movieData.runtime}</p>
            <p>Status:{movieData.status}</p>
          </div>
          <p>{movieData.overview}</p>
          <div className="vote">
            <p>Average Vote:{movieData.vote_average}</p>
            <p>Vote Count:{movieData.vote_count}</p>
          </div>
        </div>
        <div className="footer">
          <button onClick={() => setOpenModal(false)}>cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
