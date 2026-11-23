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
    const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 650 : 1800;
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
        <div className="wax-seal"><span>অ</span></div>
      </button>
      <button className="button button--primary envelope-open-button" onClick={() => open()} aria-label="Open your wedding invitation">
        {opened ? "UNSEALING YOUR INVITATION" : "BREAK THE SEAL"}
        <ArrowDown size={16} aria-hidden="true" />
      </button>
      <p className="envelope-footnote">A little surprise, sealed with love</p>
    </section>
  );
}
