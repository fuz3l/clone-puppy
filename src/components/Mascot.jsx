"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import "./mascot.css";

/**
 * Interactive puppy mascot (original SVG). Idles, then reacts on its own
 * every `idleEvery` ms, on hover, and on click.
 * @param {{ caption?: string, idleEvery?: number }} props
 */
const REACTIONS = [
  { mood: "jump", say: "boing!", ms: 900, hearts: true },
  { mood: "play", say: "play with me!", ms: 2200 },
  { mood: "sneeze", say: "achoo!", ms: 1200 },
  { mood: "curious", say: "hm?", ms: 1600 },
];

export default function Mascot({ caption = "self-portrait", idleEvery = 7000 }) {
  const [mood, setMood] = useState("idle");
  const [say, setSay] = useState("");
  const [hearts, setHearts] = useState([]);
  const resetTimer = useRef(null);
  const last = useRef(-1);
  const nextId = useRef(0);

  const react = useCallback((r) => {
    clearTimeout(resetTimer.current);
    setMood(r.mood);
    setSay(r.say);
    if (r.hearts) {
      const batch = Array.from({ length: 5 }, () => ({
        id: nextId.current++,
        x: Math.round(Math.random() * 120 - 60),
      }));
      setHearts((h) => [...h, ...batch]);
      setTimeout(
        () => setHearts((h) => h.filter((x) => !batch.some((b) => b.id === x.id))),
        1500
      );
    }
    resetTimer.current = setTimeout(() => {
      setMood("idle");
      setSay("");
    }, r.ms);
  }, []);

  const pickNext = useCallback(() => {
    let i;
    do i = Math.floor(Math.random() * REACTIONS.length);
    while (i === last.current);
    last.current = i;
    react(REACTIONS[i]);
  }, [react]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const iv = setInterval(pickNext, idleEvery);
    return () => {
      clearInterval(iv);
      clearTimeout(resetTimer.current);
    };
  }, [pickNext, idleEvery]);

  return (
    <figure className="mascot">
      <button
        type="button"
        className="mascot__circle"
        aria-label="Pet the puppy"
        onClick={pickNext}
        onMouseEnter={() => mood === "idle" && react(REACTIONS[3])}
      >
        <span className="mascot__bubble" role="status" data-show={!!say}>
          {say}
        </span>
        {hearts.map((h) => (
          <span key={h.id} className="mascot__heart" style={{ "--x": `${h.x}px` }} aria-hidden="true">
            ♥
          </span>
        ))}
        <Puppy mood={mood} />
      </button>
      <figcaption className="mascot__caption">{caption}</figcaption>
    </figure>
  );
}

export function Puppy({ mood = "idle" }) {
  return (
    <svg className={`pup pup--${mood}`} viewBox="0 0 200 200" aria-hidden="true">
      <ellipse className="pup__shadow" cx="100" cy="178" rx="52" ry="7" />
      <g className="pup__all">
        <g className="pup__tail">
          <path className="pup__fur" d="M136 128 q18 -4 20 -20" />
          <circle className="pup__fur pup__pom" cx="158" cy="104" r="12" />
        </g>
        <ellipse className="pup__fur" cx="100" cy="138" rx="44" ry="32" />
        <g className="pup__rear">
          <ellipse className="pup__fur-dark" cx="128" cy="150" rx="22" ry="20" />
          <rect className="pup__fur-dark" x="118" y="162" width="26" height="14" rx="7" />
        </g>
        <g className="pup__front">
          <rect className="pup__fur" x="76" y="140" width="15" height="36" rx="7.5" />
          <rect className="pup__fur" x="98" y="140" width="15" height="36" rx="7.5" />
        </g>
        <g className="pup__head">
          <ellipse className="pup__fur-dark pup__ear" cx="62" cy="98" rx="13" ry="22" transform="rotate(14 62 98)" />
          <ellipse className="pup__fur-dark pup__ear" cx="114" cy="98" rx="13" ry="22" transform="rotate(-14 114 98)" />
          <circle className="pup__fur" cx="88" cy="94" r="32" />
          <circle className="pup__fur" cx="88" cy="62" r="11" />
          <circle className="pup__cheek" cx="68" cy="102" r="6" />
          <circle className="pup__cheek" cx="108" cy="102" r="6" />
          <path className="pup__line" d="M72 92 q6 -7 12 0 M92 92 q6 -7 12 0" />
          <ellipse className="pup__nose" cx="88" cy="101" rx="5.5" ry="4" />
          <path className="pup__line" d="M88 105 v4 M81 110 q7 6 14 0" />
          <path className="pup__collar" d="M64 122 q24 14 48 0" />
          <circle className="pup__tag" cx="88" cy="131" r="4" />
        </g>
      </g>
    </svg>
  );
}
