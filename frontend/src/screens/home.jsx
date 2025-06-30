import React from 'react'
import { useEffect, useState } from 'react';
import PinCard from '../../components/pinCard';
import axios from 'axios';
import { PlusOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from "react-router-dom";



const OBJECTS_IMAGE = [
  {
    name: "img1",
    id: "1",
    path: "/images/drexel_logo.png",
    date: "22/03/2024"
  },

  {
    name: "img2",
    id: "2",
    path: "/images/drexel_logo.png",
    date: "22/03/2024"
  },

  {
    name: "img3",
    id: "3",
    path: "/images/drexel_logo.png",
    date: "22/03/2024"
  },

  {
    name: "img4",
    id: "4",
    path: "/images/drexel_logo.png",
    date: "22/03/2024"
  },
];



const home = () => {

  const [objects, setObjects] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const fetchData = async () => {
    const response = await axios.get("http://localhost:8080/api/photosinfo");
    console.log(response.data.photos);
    setObjects(response.data.photos);
  };

  useEffect(() => {
    fetchData();
    
  }, []);

  return (
    <div className="container">
    {objects.map((item) => (
      <PinCard key={item.id} imgPath={item.path} imgTitle={item.title} imgDate={item.date} />
      ))}

     <nav className='navbar'>
      <button className='add-btn' onClick={() => navigate("/form", {state: {background: location}})}>
      <PlusOutlined style={{fontSize: 45, color: "#3b0b0b"}} />
      </button>
    
    
     </nav>
    </div>
  );
}

export default home;