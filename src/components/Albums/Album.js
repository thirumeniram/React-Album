import React from "react";
import { Link } from "react-router-dom";
import image from "../../Assets/vintage-radio.png";

const Album = (props) => {
  // Function to generate a random year based on album ID
  function generateRandomYear(id) {
    const randomYear = (id % 20) + 2000;
    return randomYear;
  }
  // Function to generate a rating based on album ID
  function generateRating(id) {
    const rating = id % 5;
    return rating > 2 ? rating : rating + 3;
  }

  return (
    <div className="list">
      <div className="left-section">
        <img src={image} alt={"error"}></img>
      </div>
      <div className="right-section">
        <h3>{props.album.title}</h3>
        <h4>Artist-Id: {props.album.userId}</h4>
        <h4>Year: {generateRandomYear(props.album.id)}</h4>
        <h4>Rating:{generateRating(props.album.id)}</h4>
        <div className="button-group">
          <Link to="/update-album">
            <button
              className="update-btn"
              onClick={() => props.setUpdateAlbum(props.album)}
            >
              Update
            </button>
          </Link>
          <button
            className="delete-btn"
            onClick={() => props.deleteAlbum(props.album.id)}
          >
            <i id="removeicon" class="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Album;
