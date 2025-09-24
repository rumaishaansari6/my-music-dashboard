let tracks = [
  { id: 1, title: "Song A", artist: "Artist 1", releaseDate: "2025-01-01", genre: "Pop", status: "Published" },
  { id: 2, title: "Song B", artist: "Artist 2", releaseDate: "2025-02-15", genre: "Rock", status: "Draft" },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(tracks);
  } else if (req.method === "POST") {
    const newTrack = { id: tracks.length + 1, ...req.body, status: "Draft" };
    tracks.push(newTrack);
    res.status(201).json(newTrack);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}