import { useState } from "react";
import { ArrowDown, Flower2 } from "lucide-react";
import { weddingData } from "../data/weddingData";
import { Alpana } from "./Alpana";

type Props = { onOpen: () => void };

export function EnvelopeIntro({ onOpen }: Props) {
  const [opened, setOpened] = useState(false);
  const open = () => {
    if (opened) return;
    setOpened(true);
    const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 700 : 2300;
    window.setTimeout(onOpen, delay);
  };

  return (
    <section className={`envelope-screen ${opened ? "envelope-screen--opened" : ""}`} aria-label="Wedding invitation envelope">
      <div className="petal petal--one">✿</div>
      <div className="petal petal--two">✿</div>
      <div className="petal petal--three">✿</div>
      <Alpana className="envelope-alpana" />
      <div className="envelope-copy">
        <p className="eyebrow">A celebration of love and family</p>
        <h1 className="envelope-names">{weddingData.groom}<span>&amp;</span>{weddingData.bride}</h1>
        <p className="envelope-intro">YOU ARE CORDIALLY INVITED</p>
      </div>
      <button
        type="button"
        className="envelope-art"
        onClick={open}
        disabled={opened}
        aria-label="Tap to unseal the wedding invitation"
      >
        <span className="envelope-orbit" aria-hidden="true" />
        <div className="envelope-paper"><Flower2 size={26} strokeWidth={1} /><span>With love,</span><strong>{weddingData.groom} &amp; {weddingData.bride}</strong></div>
        <div className="envelope-back" />
        <div className="envelope-flap" />
        <div className="envelope-front-left" />
        <div className="envelope-front-right" />
        <div className="envelope-front-bottom" />
        <div className="wax-seal">
          <svg className="wax-seal__heart" viewBox="0 0 64 58" aria-hidden="true">
            <defs>
              <radialGradient id="wax-heart-fill" cx="35%" cy="28%">
                <stop offset="0" stopColor="#b4454f" />
                <stop offset="1" stopColor="#8e1935" />
              </radialGradient>
            </defs>
            <path d="M32 55 6.7 29.8C-5 18.2 3.2 2 17 2c6.2 0 11.6 3.4 15 9 3.4-5.6 8.8-9 15-9 13.8 0 22 16.2 10.3 27.8L32 55Z" />
            <text x="32" y="32" textAnchor="middle">A&amp;P</text>
          </svg>
        </div>
      </button>
      <button className="envelope-open-button" onClick={() => open()} aria-label="Witness the beginning">
        <span className="envelope-open-button__label">{opened ? "A NEW CHAPTER OPENS" : "WITNESS THE BEGINNING"}</span>
        <span className="envelope-open-button__icon"><ArrowDown size={17} aria-hidden="true" /></span>
      </button>
      <p className="envelope-footnote">A little surprise, sealed with love</p>
    </section>
  );
}
