import { useState } from "react";
import { ArrowDown, Flower2 } from "lucide-react";
import { weddingData } from "../data/weddingData";
import { Alpana } from "./Alpana";

type Props = { onOpen: () => void };

export function EnvelopeIntro({ onOpen }: Props) {
  const [opened, setOpened] = useState(false);
  const open = (skipAnimation = false) => {
    if (opened) return;
    setOpened(true);
    const delay = skipAnimation || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 1250;
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
      <div className="envelope-art" aria-hidden="true">
        <div className="envelope-paper"><Flower2 size={26} strokeWidth={1} /><span>With love,</span><strong>{weddingData.groom} &amp; {weddingData.bride}</strong></div>
        <div className="envelope-back" />
        <div className="envelope-flap" />
        <div className="envelope-front-left" />
        <div className="envelope-front-right" />
        <div className="envelope-front-bottom" />
        <div className="wax-seal"><span>অ</span></div>
      </div>
      <button className="button button--primary envelope-open-button" onClick={() => open()} aria-label="Open your wedding invitation">
        {opened ? "OPENING YOUR INVITATION" : "OPEN YOUR INVITATION"}
        <ArrowDown size={16} aria-hidden="true" />
      </button>
      {!opened && <button className="skip-button" onClick={() => open(true)}>Skip animation</button>}
      <p className="envelope-footnote">A little note, opened with love</p>
    </section>
  );
}
