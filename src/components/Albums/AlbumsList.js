import React from "react";
import Album from "./Album";
import { Link } from "react-router-dom";

const AlbumsList = (props) => {
  return (
    <>
      {/* Button to navigate to the add album page */}
      <div className="addalbum">
        <Link to="/add-album">
          <button className="addalbum-button">Add Album</button>
        </Link>
      </div>

      {/* Displaying the list of albums using Album component */}
      <div className="albums-list">
        {props.albums.map((album, index) => (
          <Album
            album={album}
            key={album.id}
            count={index}
            setUpdateAlbum={props.setUpdateAlbum}
            deleteAlbum={props.deleteAlbum}
          />
        ))}
      </div>
    </>
  );
};

export default AlbumsList;
