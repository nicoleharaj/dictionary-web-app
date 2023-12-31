"use client";
import Image from "next/image";
import useFontSelector from "../hooks/useFontSelector";
import { MouseEvent, useState } from "react";

export default function FontSelect() {
  const [currentFont, setFontFamily] = useFontSelector();
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setFontFamily(e.currentTarget.value);
    setShowMenu(false);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center gap-4"
        onClick={() => setShowMenu(!showMenu)}
        onBlur={() => setShowMenu(false)}
      >
        <span className="text-body-md font-bold">
          {currentFont === "sans"
            ? "Sans Serif"
            : currentFont === "mono"
            ? "Mono"
            : currentFont === "serif"
            ? "Serif"
            : "Sans Serif"}
        </span>
        <div className="relative h-[6px] w-[12px]">
          <Image src="/images/icon-arrow-down.svg" alt="Dropdown arrow" fill />
        </div>
      </button>

      {showMenu && (
        <ul className="absolute right-0 z-50 mt-4 flex w-[183px] flex-col rounded-xl  bg-white text-body-md font-bold shadow-menu dark:bg-neutral-600 dark:shadow-menu-dark">
          <li className="font-sans">
            <button
              className="w-full px-6 pt-6 text-left hover:text-purple"
              value="sans"
              onMouseDown={handleClick}
            >
              Sans Serif
            </button>
          </li>
          <li className="font-serif">
            <button
              className="w-full px-6 py-4 text-left hover:text-purple"
              value="serif"
              onMouseDown={handleClick}
            >
              Serif
            </button>
          </li>
          <li className="font-mono">
            <button
              className="w-full px-6 pb-6 text-left hover:text-purple"
              value="mono"
              onMouseDown={handleClick}
            >
              Mono
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
