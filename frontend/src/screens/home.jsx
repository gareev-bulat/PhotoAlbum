import React from 'react'
import { useEffect, useState } from 'react';
import PinCard from '../../components/pinCard';
import axios from 'axios';
import { PlusOutlined, EditOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from "react-router-dom";



const Home = () => {

  const [objects, setObjects] = useState([]);
  const [plus, setIsPlusHovered] = useState(false);
  const [edits, setIsEditsHovered] = useState(false);
  const[edit, setEdit] = useState(false);

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

  function handleUpload () {

    setEdit(false);
    navigate("/form", {state: {background: location}})

  }

  return (
    <div className="container">
      <h2 className='header'>Family Album</h2>
    {objects.map((item) => (
      <PinCard key={item.id} imgPath={item.path} imgTitle={item.title} imgDate={item.date} edit={edit} />
      ))}

     <nav className='navbar'>
      <button className='add-btn' onClick={handleUpload}>
      <PlusOutlined style={{fontSize: 45, color: plus ? "#ffffff" : "#3b0b0b" }} onMouseEnter={() => setIsPlusHovered(true)} onMouseLeave={() => setIsPlusHovered(false)} />
      </button>
      <button className='add-btn' onClick={() => setEdit(!edit)}>
      <EditOutlined style={{fontSize: 45, color: edits ? "#ffffff" : "#3b0b0b" }} onMouseEnter={() => setIsEditsHovered(true)} onMouseLeave={() => setIsEditsHovered(false)} />
      </button>
      
    
    
     </nav>
    </div>
  );
}

export default Home;