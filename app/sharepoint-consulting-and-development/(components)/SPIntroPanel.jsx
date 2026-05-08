// powerplatformexperts.com.au/sharepoint-consulting-and-development/(components)/SPIntroPanel.jsx
"use client";

import { useEffect, useState, useRef } from "react";
import styles from "../../../styles/spIntro.module.scss";

const TYPEWRITER_SPEED = 38; // ms per character
const STAGGER_DELAY = 400; // ms between each card starting to type
const HOLD_AFTER_TYPE = 2000; // ms pause before explosion
const EXPLODE_DURATION = 500; // ms for explosion animation
const SOLUTION_HOLD = 5000; // ms solution stays visible before loop
const LOOP_PAUSE = 1200; // ms blank pause before restarting

// States a single card cycles through
const S = { IDLE: 0, TYPING: 1, HOLD: 2, EXPLODING: 3, SOLVED: 4 };

function useSequencedAnimation(problems) {
  const [cards, setCards] = useState(
    problems.map(() => ({ state: S.IDLE, typed: "" })),
  );
  const timeouts = useRef([]);

  const clear = () => {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
  };
  const defer = (fn, ms) => {
    const t = setTimeout(fn, ms);
    timeouts.current.push(t);
    return t;
  };

  const setCard = (i, patch) =>
    setCards((prev) =>
      prev.map((c, idx) => (idx === i ? { ...c, ...patch } : c)),
    );

  const typeCard = (i, text, offset, onDone) => {
    if (offset > text.length) {
      onDone();
      return;
    }
    setCard(i, { state: S.TYPING, typed: text.slice(0, offset) });
    defer(() => typeCard(i, text, offset + 1, onDone), TYPEWRITER_SPEED);
  };

  const runSequence = (startDelay = 0) => {
    clear();
    setCards(problems.map(() => ({ state: S.IDLE, typed: "" })));

    problems.forEach(({ problem }, i) => {
      const fullText = problem + "?";
      const cardStart = startDelay + i * STAGGER_DELAY;

      // 1. Type out
      defer(() => {
        typeCard(i, fullText, 0, () => {
          // 2. Hold
          setCard(i, { state: S.HOLD, typed: fullText });
          defer(() => {
            // 3. Explode
            setCard(i, { state: S.EXPLODING });
            defer(() => {
              // 4. Solution revealed
              setCard(i, { state: S.SOLVED });

              // Loop after last card finishes
              if (i === problems.length - 1) {
                defer(() => runSequence(0), SOLUTION_HOLD + LOOP_PAUSE);
              }
            }, EXPLODE_DURATION);
          }, HOLD_AFTER_TYPE);
        });
      }, cardStart);
    });
  };

  useEffect(() => {
    runSequence(300);
    return clear;
  }, []); // eslint-disable-line

  return cards;
}

export default function SPIntroPanel({ problems }) {
  const cards = useSequencedAnimation(problems);

  return (
    <ul className={styles.animCards}>
      {problems.map(({ problem, fix, label }, i) => {
        const { state, typed } = cards[i];
        return (
          <li
            key={i}
            className={[
              styles.animCard,
              state === S.EXPLODING ? styles.exploding : "",
              state === S.SOLVED ? styles.solved : "",
            ].join(" ")}
            aria-label={`${problem} — resolved: ${fix}`}
          >
            {/* Tag always visible */}
            <span className={styles.animTag}>{label}</span>

            {/* Problem layer — always visible once typed; struck through when solved */}
            <p className={styles.problemText} aria-hidden="true">
              {state >= S.EXPLODING ? problem + "?" : typed}
              {(state === S.TYPING || state === S.HOLD) && (
                <span className={styles.cursor} />
              )}
            </p>

            {/* Solution layer — sits behind, revealed on solve */}
            <p className={styles.solutionText} aria-hidden="true">
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <circle
                  cx="6"
                  cy="6"
                  r="5.25"
                  stroke="currentColor"
                  strokeWidth="1.3"
                />
                <path
                  d="M3.5 6l2 2 3-3"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {fix}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
