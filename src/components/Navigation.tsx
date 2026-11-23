import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { weddingData } from "../data/weddingData";

const links = [
  ["invitation", "Invitation"],
  ["events", "Events"],
  ["countdown", "Countdown"],
  ["venues", "Venues"],
  ["family", "Family"],
  ["share", "Share"],
] as const;

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("invitation");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    links.forEach(([id]) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setOpen(false);
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <a className="nav-mark" href="#invitation" onClick={closeMenu} aria-label={`${weddingData.groom} and ${weddingData.bride} invitation`}>
        {weddingData.groom} <span>&amp;</span> {weddingData.bride}
      </a>
      <button className="nav-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
      <div className={`nav-links ${open ? "nav-links--open" : ""}`}>
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? "nav-link nav-link--active" : "nav-link"} onClick={closeMenu}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
