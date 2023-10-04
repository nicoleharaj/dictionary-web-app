import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function useFontSelector(
  initialFont: string = "sans",
): [string, Dispatch<SetStateAction<string>>] {
  const storedFont =
    typeof window !== "undefined" ? localStorage.getItem("selectedFont") : null;

  const defaultFont = storedFont || initialFont;

  const [fontFamily, setFontFamily] = useState(defaultFont);

  useEffect(() => {
    const body = window.document.body;
    body.classList.remove("font-sans", "font-mono", "font-serif");
    body.classList.add(`font-${fontFamily}`);

    localStorage.setItem("selectedFont", fontFamily);
  }, [fontFamily]);

  return [fontFamily, setFontFamily];
}
