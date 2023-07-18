import React from "react";
import { Link } from "react-router-dom";

const AlbumAddition = (props) => {
  // Function to handle form submission and add a new album
  const getAlbumFormData = () => {
    // Get the values from the input fields
    const ArtistId = document.getElementById("form-Artistid-inp").value;
    const title = document.getElementById("form-title-inp").value;

    // Call the addAlbum function and passing the parsed values
    props.addAlbum(Number(ArtistId), title);
  };

  return (
    <>
      <div className="addalbum-container">
        <div className="addalbum-form">
          <h2>New Album</h2>

          {/* Input field for Artist Id */}
          <div className="inp-container">
            Enter Artist Id:
            <input id="form-Artistid-inp" type="number" />
          </div>

          {/* Input field for Album Title */}
          <div className="inp-container">
            Enter Album Title:
            <input id="form-title-inp" type="text" />
          </div>

          {/* Buttons */}
          <div>
            {/* Link to navigate back to albums list */}
            <Link to="/">
              <div className="saveandcancel">
                {/* Button to submit the form and call the getAlbumFormData function for adding a new album */}
                <button onClick={getAlbumFormData} className="addtolAlbums">
                  Add To Albums
                </button>

                <button type="submit" className="cancel1">
                  cancel
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlbumAddition;
