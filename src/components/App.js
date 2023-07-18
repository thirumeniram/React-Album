import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AlbumAddition from "./AlbumAddition/AlbumAddition";
import AlbumsList from "./Albums/AlbumsList";
import Navbar from "./Navbar/Navabr";
import AlbumUpdation from "./AlbumUpdation/AlbumUpdation.js"

const App = () => {
  const [albums, setAlbums] = useState([]);
  const [updateAlbum, setUpdateAlbum] = useState({});

  // Fetching albums data from API on app mounting
  useEffect(() => {
    const fetchAlbums = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
      );
      const data = await response.json();
      setAlbums(data);
    };

    fetchAlbums();
  }, []);

  // Deleting album based on its ID
  const deleteAlbum = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: "DELETE",
    });
    const alteredAlbums = albums.filter((album) => album.id !== id);
    alert("album Deleted successfully");
    setAlbums(alteredAlbums);
  };

  // Updating album based on its ID and new title/userID
  const updatedAlbum = async (id, updateTitle, updateUserid, oldAlbum) => {
    let updatedAlbum = [];
    const index = albums.indexOf(oldAlbum);

    if (id < 100) {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            userId: updateUserid,
            id: id,
            title: updateTitle,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      updatedAlbum = await response.json();
    } else {
      updatedAlbum = {
        userId: updateUserid,
        id: id,
        title: updateTitle,
      };
    }

    const updatedAlbums = [...albums];
    updatedAlbums[index] = updatedAlbum;
    setAlbums(updatedAlbums);
    alert("Update Successfully done");
  };

  // Adding a new album to the list
  const addAlbum = (userId, title) => {
    fetch("https://jsonplaceholder.typicode.com/albums", {
      method: "POST",
      body: JSON.stringify({
        userId: userId,
        id: albums.length + 1,
        title: title,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const album = {
      userId: userId,
      id: albums.length + 1,
      title: title,
    };
    setAlbums([...albums, album]);
    alert("New Album added successfully");
  };

  return (
    <>
      <Navbar />
      <Routes>
        {/* Rendering the AlbumsList component for the home page */}
        <Route
          path="/"
          element={
            <AlbumsList
              albums={albums}
              setUpdateAlbum={setUpdateAlbum}
              deleteAlbum={deleteAlbum}
            />
          }
        />

        {/* Rendering the AlbumAddition component for adding a new album */}
        <Route
          path="/add-album"
          element={<AlbumAddition addAlbum={addAlbum} />}
        />

        {/* Rendering the AlbumUpdation component for updating an album */}
        <Route
          path="/update-album"
          element={
            <AlbumUpdation album={updateAlbum} updatedAlbum={updatedAlbum} />
          }
        />
      </Routes>
    </>
  );
};

export default App;
