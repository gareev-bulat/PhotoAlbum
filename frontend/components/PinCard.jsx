import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlusOutlined, EditOutlined } from '@ant-design/icons';


const PinCard = (props) => {
  const { imgPath, imgTitle, imgDate, edit } = props;

  if (edit) {
    console.log("hellloooo");
  }

  const navigate = useNavigate();

  const [del, setIsDelHovered] = useState(false);

  function handleClick() {
    navigate("/photo", { state: { imgPath, imgTitle, imgDate } });
  }

  return (
    <div className="card" onClick={handleClick}>
      {edit && 
      <button className="delete-btn">
        <PlusOutlined style={{fontSize: 45, color: del ? "#ffffff" : "#3b0b0b" }} onMouseEnter={() => setIsDelHovered(true)} onMouseLeave={() => setIsDelHovered(false)} />
      </button>}
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
