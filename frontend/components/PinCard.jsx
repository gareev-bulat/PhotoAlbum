import React from "react";
import { useNavigate } from "react-router-dom";

const PinCard = (props) => {

  const { imgPath, imgName, imgId } = props

  const navigate = useNavigate();

  function handleClick() {
    navigate("/photo", { state: { imgPath, imgName, imgId }});
  }

  return (
    <div className="card" onClick={handleClick}>
      <img src="/images/pin.png" width={64} height={64} className="pin" />
      <img
        src={imgPath}
        width={300}
        height={300}
        alt={imgName}
        className="photo"
      />
    </div>
  );
};

export default PinCard;
