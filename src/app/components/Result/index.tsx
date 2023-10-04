import Image from "next/image";
import Divider from "../Divider";
import { QueryResult } from "../SearchBox";
import Meaning from "./Meaning";
import PlayIcon from "../ui/PlayIcon";

interface IResult {
  data: QueryResult;
}

export default function Result({ data }: IResult) {
  let audio: HTMLAudioElement = new Audio(undefined);
  for (let i = 0; i < data.phonetics.length; i++) {
    if (data.phonetics[i].audio !== "") {
      audio.src = data.phonetics[i].audio;
      break;
    }
  }

  const handleClick = () => {
    audio.play();
  };

  return (
    <section className="flex flex-col gap-[34px] md:gap-12">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="text-[32px] font-bold md:text-heading-lg">
            {data.word}
          </h1>
          {data.phonetic && (
            <p className="text-body-md text-purple md:text-heading-md">
              {data.phonetic}
            </p>
          )}
        </div>

        {audio.src && (
          <button aria-label="Pronunciation" onClick={handleClick}>
            <PlayIcon className="stroke-purple transition-colors group-hover:stroke-white" />
          </button>
        )}
      </div>

      {data.meanings.map((m, index) => {
        return <Meaning data={m} key={index} />;
      })}

      {data.sourceUrls && (
        <div>
          <Divider horizontal />
          <ul className="mt-[19px] flex flex-col gap-2 text-body-sm">
            {data.sourceUrls.map((url, index) => (
              <li key={index} className="flex gap-5">
                <h4 className="text-neutral-400">
                  Source
                </h4>
                <a
                  href={url}
                  className="flex items-center gap-[9px] text-neutral-600 dark:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="border-b border-neutral-600 dark:border-white">
                    {url}
                  </span>
                  <div className="relative h-[12px] w-[12px]">
                    <Image
                      alt="External link icon"
                      src="/images/icon-new-window.svg"
                      fill
                    />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
