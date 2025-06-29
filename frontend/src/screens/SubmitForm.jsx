import { useNavigate } from "react-router-dom";
import "./screens.css";

export default function SubmitForm() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Submitted!")
    /* TODO: post data … */
    navigate(-1);               // go back to the grid
  }

  return (
    <div className="modal-backdrop" onClick={() => navigate(-1)}>
      <div className="modal-body" onClick={e => e.stopPropagation()}>
        <h2>Add a Photo</h2>

        <form onSubmit={handleSubmit} className="form">
          <label className="label">Name</label>
          <input name="name" className="input" required />

          <label className="label">Date</label>
          <input name="name" className="input" required />

          <label className="label">Image URL</label>
          <input name="path" className="input" required />

          <button className="buttonForm" type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}
