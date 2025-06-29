import React from 'react'
import { useEffect, useState } from 'react';
import PinCard from '../../components/pinCard';
import axios from 'axios';


const OBJECTS_IMAGE = [
  {
    name: "img1",
    id: 1,
    path: "/images/drexel_logo.png",
  },

  {
    name: "img2",
    id: 2,
    path: "/images/drexel_logo.png",
  },

  {
    name: "img3",
    id: 3,
    path: "/images/drexel_logo.png",
  },

  {
    name: "img4",
    id: 4,
    path: "/images/drexel_logo.png",
  },
];



const home = () => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:8080");
    setData(response.data.blogPosts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
    {OBJECTS_IMAGE.map((item) => (
      <PinCard key={item.id} imgPath={item.path} imgName={item.name} imgid={item.id} />
      ))}
    </div>
  );
}

export default home;