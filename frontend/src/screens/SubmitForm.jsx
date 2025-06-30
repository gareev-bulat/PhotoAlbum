import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./screens.css";

export default function SubmitForm() {
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const payload = {
      name: form.name.value,
      date: form.date.value,
      path: form.path.value,
    }

    try{
      await axios.post("http://localhost:8080/api/photosinfo", payload);
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
          <input name="name" className="input" required />

          <label className="label">Date</label>
          <input name="date" className="input" required />

          <label className="label">Image URL</label>
          <input name="path" className="input" required />

          <button className="buttonForm" type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}
