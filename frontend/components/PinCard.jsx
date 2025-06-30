import React from "react";
import { useNavigate } from "react-router-dom";

const PinCard = (props) => {

  const { imgPath, imgTitle, imgDate } = props

  const navigate = useNavigate();

  function handleClick() {
    navigate("/photo", { state: { imgPath, imgTitle, imgDate }});
  }

  return (
    <div className="card" onClick={handleClick}>
      <img src="/images/pin.png" width={64} height={64} className="pin" />
      <img
        src={imgPath}
        width={300}
        height={300}
        alt={imgTitle}
        className="photo"
      />
    </div>
  );
};

export default PinCard;
