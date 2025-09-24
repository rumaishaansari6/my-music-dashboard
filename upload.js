import React, { useState, useEffect } from "react"; // ✅ Add this line
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";

export default function Upload({ theme, setTheme }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedTracks = JSON.parse(localStorage.getItem("tracks")) || [];
    const newTrack = {
      id: storedTracks.length > 0 ? storedTracks[storedTracks.length - 1].id + 1 : 1,
      title,
      artist,
      releaseDate,
      genre,
      status: "Pending"
    };
    const updatedTracks = [...storedTracks, newTrack];
    localStorage.setItem("tracks", JSON.stringify(updatedTracks));
    router.push("/dashboard");
  };

  return (
    <div style={{ padding: "20px" }}>
      <Navbar theme={theme} setTheme={setTheme} />
      <h2>Add New Track</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "400px", gap: "10px" }}>
        <input type="text" placeholder="Track Title" value={title} onChange={e => setTitle(e.target.value)} required />
        <input type="text" placeholder="Artist Name" value={artist} onChange={e => setArtist(e.target.value)} required />
        <input type="date" value={releaseDate} onChange={e => setReleaseDate(e.target.value)} required />
        <input type="text" placeholder="Genre" value={genre} onChange={e => setGenre(e.target.value)} required />
        <button type="submit" style={{ padding: "8px 12px" }}>Add Track</button>
      </form>
    </div>
  );
}