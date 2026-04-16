import { useEffect, useState } from "react";

export const useTypewriter = (
  texts: string[],
  typeSpeed = 80,
  deleteSpeed = 40,
  pause = 1800,
) => {
  const [state, setState] = useState({ char: 0, idx: 0, deleting: false });

  useEffect(() => {
    const { char, idx, deleting } = state;
    const current = texts[idx];
    const delay =
      !deleting && char === current.length
        ? pause
        : deleting
          ? deleteSpeed
          : typeSpeed;

    const t = setTimeout(() => {
      setState(prev => {
        const cur = texts[prev.idx];
        if (!prev.deleting && prev.char === cur.length)
          return { ...prev, deleting: true };
        if (prev.deleting && prev.char === 0)
          return {
            char: 0,
            idx: (prev.idx + 1) % texts.length,
            deleting: false,
          };
        return { ...prev, char: prev.deleting ? prev.char - 1 : prev.char + 1 };
      });
    }, delay);

    return () => clearTimeout(t);
  }, [state, texts, typeSpeed, deleteSpeed, pause]);

  return texts[state.idx].slice(0, state.char);
};
