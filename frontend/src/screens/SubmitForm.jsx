import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./screens.css";

export default function SubmitForm() {
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const file = form.path.files[0];

    const fd = new FormData();
    fd.append("title", form.title.value);
    fd.append("date", form.date.value);
    fd.append("image", file);

    try{
      await axios.post("http://localhost:8080/api/photosinfo", fd);      
      navigate(-1);  
      console.log("Submitted!")
    } catch(err){
      console.error("Failed to save photo:", err);
    }
               
  }

  return (
    <div className="modal-backdrop" onClick={() => navigate(-1)}>
      <div className="modal-body" onClick={e => e.stopPropagation()}>
        <h2>Add a Photo</h2>

        <form onSubmit={handleSubmit} className="form">
          <label className="label">Name</label>
          <input name="title" type="text" className="input" required />

          <label className="label">Date</label>
          <input name="date" type="date" className="input" required />

          <label className="label">Image URL</label>
          <input name="path" type="file" accept="image/*" required />

          <button className="buttonForm" type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}
