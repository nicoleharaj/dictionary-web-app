import Image from "next/image";
import Divider from "../Divider";
import { QueryResult } from "../SearchBox";
import Meaning from "./Meaning";

interface IResult {
  data: QueryResult;
}

export default function Result({ data }: IResult) {
  return (
    <section className="flex flex-col gap-8 md:gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-heading-lg font-bold">{data.word}</h1>

        {data.phonetic && (
          <p className="text-heading-md text-purple">{data.phonetic}</p>
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
                <h4 className="border-b border-neutral-400 text-neutral-400">
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
