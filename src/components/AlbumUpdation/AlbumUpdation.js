import React from "react";
import { Link } from "react-router-dom";

const AlbumUpdation = (props) => {
  const getUpdateData = () => {
    // Getting the album id from props
    const id = props.album.id;
    // Getting the updated title and artist id from input fields
    let updateTitle = document.getElementById("title-inp").value;
    let updateArtistid = document.getElementById("Artistid-inp").value;

    // If the updated title is empty, use the current title from props
    if (updateTitle === "") {
      updateTitle = props.album.title;
    }
    // If the updated artist id is empty, use the current artist id from props
    if (updateArtistid === "") {
      updateArtistid = props.album.Id;
    }

    // Calling the updatedAlbum function s with the updated data
    props.updatedAlbum(id, updateTitle, Number(updateArtistid), props.album);
  };

  return (
    <>
      {/* form element for updating album */}
      <div className="update-album">
        <div className="form-container">
          {/* getting updated title from the user */}
          <div className="inp-container">
            Enter New Title :<input type="text" id="title-inp"></input>
          </div>
          {/* getting updated id from the user */}
          <div className="inp-container">
            Enter New ArtistId :<input type="number" id="Artistid-inp"></input>
          </div>

          <Link to="/">
            <div className="saveandcancel">
              {/*calling the getUpdateData function  on submiting the save button */}
              <button type="submit" onClick={getUpdateData} className="save">
                Save
              </button>
              <button type="submit" className="cancel">
                cancel
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AlbumUpdation;
