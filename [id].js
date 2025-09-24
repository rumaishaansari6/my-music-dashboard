import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function TrackDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [track, setTrack] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch("/api/tracks")
      .then(res => res.json())
      .then(data => setTrack(data.find(t => t.id === parseInt(id))));
  }, [id]);

  if (!track) return <div className="loading">Loading...</div>;

  return (
    <div className="details-page">
      <div className="details-card">
        <h2>{track.title}</h2>
        <p><b>Artist:</b> {track.artist}</p>
        <p><b>Release Date:</b> {track.releaseDate}</p>
        <p><b>Genre:</b> {track.genre}</p>
        <p><b>Status:</b> {track.status}</p>

        <div className="button-group">
          <button className="primary" onClick={() => router.push("/dashboard")}>
            ⬅ Back
          </button>
          <button className="danger" onClick={() => alert("Delete functionality yaha bhi add kar sakte ho")}>
            🗑 Delete
          </button>
        </div>
      </div>
    </div>
  );
}