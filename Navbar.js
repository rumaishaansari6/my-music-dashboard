import Link from "next/link";

export default function Navbar({ theme, setTheme }) {
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
      <div>
        <Link href="/dashboard"><button>Dashboard</button></Link>
        <Link href="/upload"><button>Add Track</button></Link>
      </div>
      <div>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? "Dark" : "Light"} Mode
        </button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}