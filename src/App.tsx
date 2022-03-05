import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useFirestoreService } from './services/firestore';
import { useQueryString } from './hooks/useQueryString';

export default function App() {
  const { authenticateAnonymously, getSavedSongs } = useFirestoreService();
  const [savedSongList, setSavedSongList] = useState();
  const [userId, setUserId] = useState<string>();
  const [error, setError] = useState<string>();

  // Use a custom hook to subscribe to the song list ID provided as a URL query parameter
  const [userSongListId, setUserSongListId] = useQueryString("");

  // Use an effect to authenticate and load the grocery list from the database
  useEffect(() => {
    authenticateAnonymously()
      .then(userCredential => {
        setUserId(userCredential.user.uid);
        if (userId) {
          getSavedSongs(userId)
            // TODO change this to not be any
            .then((savedSongList: any) => {
              if (savedSongList.exists) {
                setError(undefined);
                setSavedSongList(savedSongList.data());
              } else {
                setError('saved-song-list-not-found');
                // setUserSongListId("");
              }
            })
            .catch(() => setError('saved-song-list-get-fail'));
        }
      })
      .catch(() => setError('anonymous-auth-failed'));
  }, [userSongListId, setUserSongListId]);

  return (
    <div>
      <h1>NewTunes</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/filter">Filter</Link> |{" "}
        <Link to="/catalog">Catalog</Link> |{" "}
        <Link to="/song">Song</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/user">User</Link> |{" "}
      </nav>
      <Outlet />
    </div>
  );
}