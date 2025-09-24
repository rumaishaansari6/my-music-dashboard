import { useEffect, useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <Component {...pageProps} theme={theme} setTheme={setTheme} />;
}

export default MyApp;